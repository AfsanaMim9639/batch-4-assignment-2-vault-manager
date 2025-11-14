import React, { useState } from "react";
import PasswordCard from "./PasswordCard";
import SearchAndSort from "./SearchAndSort";
import BookmarkForm from "./BookmarkForm";
import initialServices from "../data/initialServices.json"; 
import { SearchSlash } from "lucide-react";

const MainContent = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");

  
  const handleAddBookmark = (bookmark) => {
  const domain = bookmark.url.replace(/^https?:\/\//, "").split(".")[0];
  const name = domain.charAt(0).toUpperCase() + domain.slice(1);
  const initials = domain.substring(0, 2).toUpperCase();

  
  const mainColor = bookmark.color || "#777777";

  
  const bgColor = `${mainColor}20`; 

  
  const textColor = `${mainColor}dd`; 

  const newService = {
    name,
    initials,
    category: bookmark.category,
    url: bookmark.url.replace(/^https?:\/\//, ""),
    username: bookmark.username,
    password: bookmark.password,
    bgColor,      
    textColor,     
    createdAt: Date.now(),
  };

  setServices((prev) => [newService, ...prev]);
};


  // Filter
  const filteredServices = services.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Sort
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
        {/* Bookmark form */}
        <BookmarkForm onAddBookmark={handleAddBookmark} />

        {/* Search & Sort */}
        <SearchAndSort
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {/* Password Cards */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service, idx) => (
              <PasswordCard key={idx} service={service} />
            ))}
          </div>
        ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/60 p-10 text-center text-neutral-400 text-lg font-semibold">
            <SearchSlash className="w-10 h-10 mb-3 opacity-60" />
            No results found.
            </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
