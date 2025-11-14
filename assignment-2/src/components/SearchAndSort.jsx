
import React, { useState } from "react";

const SearchAndSort = ({ searchTerm, setSearchTerm, sortOption, setSortOption }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);
  };

  return (
    <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Search Bar */}
        <label className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search saved credentials"
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        {/* Sort Button */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h18l-8 8v6l-4 4v-8z"
              ></path>
            </svg>
            Sort by
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-neutral-800 bg-neutral-900/70 shadow-lg text-white z-10">
              <ul>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-blue-500/20"
                  onClick={() => handleSortChange("name-asc")}
                >
                  Name Ascending
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-blue-500/20"
                  onClick={() => handleSortChange("name-desc")}
                >
                  Name Descending
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-blue-500/20"
                  onClick={() => handleSortChange("date-asc")}
                >
                  Date Ascending
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-blue-500/20"
                  onClick={() => handleSortChange("date-desc")}
                >
                  Date Descending
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchAndSort;
