import React, { useState } from "react";
import PasswordCard from "./PasswordCard";
import SearchAndSort from "./SearchAndSort";
import BookmarkForm from "./BookmarkForm";
import initialServices from "../data/initialServices.json"; // ✅ Imported dummy data

const MainContent = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");

  // ✅ নতুন bookmark যোগ করা (color সহ)
  const handleAddBookmark = (bookmark) => {
    const domain = bookmark.url.replace(/^https?:\/\//, "").split(".")[0];
    const name = domain.charAt(0).toUpperCase() + domain.slice(1);
    const initials = domain.substring(0, 2).toUpperCase();

    // 🔹 এখানে color সরাসরি form থেকে আসবে
    const bgColor = bookmark.color || "bg-neutral-700/40";

    const newService = {
      name,
      initials,
      category: bookmark.category,
      url: bookmark.url.replace(/^https?:\/\//, ""),
      username: bookmark.username,
      password: bookmark.password,
      bgColor, // ✅ color form theke
      textColor: "text-white",
      createdAt: Date.now(),
    };

    setServices((prevServices) => {
      const updated = [...prevServices];

      // Dummy data গুলোর নাম চেক করে replace করবো
      const dummyIndex = updated.findIndex((s) =>
        ["Facebook", "YouTube", "Dribbble"].includes(s.name)
      );

      if (dummyIndex !== -1) {
        updated[dummyIndex] = newService;
        return updated;
      } else {
        return [newService, ...updated];
      }
    });
  };

  // ✅ Filter
  const filteredServices = services.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Sort
  filteredServices.sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "date-asc":
        return a.createdAt - b.createdAt;
      case "date-desc":
        return b.createdAt - a.createdAt;
      default:
        return 0;
    }
  });

  return (
    <main className="mt-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        {/* ✅ Bookmark form */}
        <BookmarkForm onAddBookmark={handleAddBookmark} />

        {/* ✅ Search & Sort */}
        <SearchAndSort
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {/* ✅ Password Cards */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service, idx) => (
              <PasswordCard key={idx} service={service} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/60 p-10 text-center text-neutral-400 text-lg font-semibold">
            🔍 No results found.
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
