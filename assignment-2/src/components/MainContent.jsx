// src/components/MainContent.jsx
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
  },
];

const MainContent = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddBookmark = (bookmark) => {
  // URL থেকে domain name বের করা
  const domain = bookmark.url.replace(/^https?:\/\//, "").split(".")[0];
  const name = domain.charAt(0).toUpperCase() + domain.slice(1); // Example -> Example
  const initials = domain.substring(0, 2).toUpperCase();

  const newService = {
    name,
    initials,
    category: bookmark.category,
    url: bookmark.url.replace(/^https?:\/\//, ""),
    username: bookmark.username,
    password: bookmark.password, // real password
    bgColor: bookmark.color, // form থেকে আসা color 그대로 icon background
    textColor: "text-white", // icon text color
  };

  setServices([newService, ...services]);
};


  // Filter services by search term
  const filteredServices = services.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="mt-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        <BookmarkForm onAddBookmark={handleAddBookmark} />
        <SearchAndSort searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Password Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service, idx) => (
            <PasswordCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
