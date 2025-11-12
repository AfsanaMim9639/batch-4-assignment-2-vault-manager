import React, { useState } from "react";
import PasswordCard from "./PasswordCard";
import SearchAndSort from "./SearchAndSort";
import BookmarkForm from "./BookmarkForm";

// Initial sample data
const initialServices = [
  {
    name: "Facebook",
    initials: "Fb",
    category: "Social",
    url: "facebook.com",
    username: "john.doe@email.com",
    password: "••••••••",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    createdAt: Date.now() - 1000000,
  },
  {
    name: "YouTube",
    initials: "Yt",
    category: "Video",
    url: "youtube.com",
    username: "myaccount",
    password: "••••••••",
    bgColor: "bg-red-500/10",
    textColor: "text-red-400",
    createdAt: Date.now() - 500000,
  },
  {
    name: "Dribbble",
    initials: "Db",
    category: "Design",
    url: "dribbble.com",
    username: "designer_pro",
    password: "••••••••",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-300",
    createdAt: Date.now() - 2000000,
  },
];

const MainContent = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date-desc"); // default

  // নতুন bookmark যোগ করা
  const handleAddBookmark = (bookmark) => {
    const domain = bookmark.url.replace(/^https?:\/\//, "").split(".")[0];
    const name = domain.charAt(0).toUpperCase() + domain.slice(1);
    const initials = domain.substring(0, 2).toUpperCase();

    const newService = {
      name,
      initials,
      category: bookmark.category,
      url: bookmark.url.replace(/^https?:\/\//, ""),
      username: bookmark.username,
      password: bookmark.password,
      bgColor: bookmark.color,
      textColor: "text-white",
      createdAt: Date.now(),
    };

    setServices([newService, ...services]);
  };

  // Filter by search term
  let filteredServices = services.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting
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
        <BookmarkForm onAddBookmark={handleAddBookmark} />

        {/* Search and Sort */}
        <SearchAndSort
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {/* Password Cards Grid */}
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
