// src/components/BookmarkForm.jsx
import React, { useState } from "react";

const BookmarkForm = () => {
  const [url, setUrl] = useState("");
  const [color, setColor] = useState("#3b82f6");
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // submitted bookmarks array
  const [bookmarks, setBookmarks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBookmark = { url, color, category, username, password };
    setBookmarks([...bookmarks, newBookmark]);

    // clear form
    setUrl("");
    setColor("#3b82f6");
    setCategory("");
    setUsername("");
    setPassword("");
  };

  const handleReset = () => {
    setUrl("");
    setColor("#3b82f6");
    setCategory("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur"
      >
        {/* Form Header */}
        <div className="mb-8 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            New bookmark
          </p>
          <h2 className="text-2xl font-semibold">
            Store website credentials safely
          </h2>
          <p className="text-sm text-neutral-400">
            Fill the details below. Your brand color helps us render a matching
            favicon.
          </p>
        </div>

        {/* Form Inputs */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Website URL */}
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Website URL
              </span>
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <span className="text-xs text-neutral-500">
                Include https:// for best results.
              </span>
            </label>

            {/* Favicon Color */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Favicon color
                  </p>
                  <p className="text-xs text-neutral-500">
                    Select the accent color we should render.
                  </p>
                </div>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400">
                  Hex
                </span>
                <span>Matches any brand primary color.</span>
              </div>
            </div>

            {/* Category */}
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Category
              </span>
              <select
                className="w-full bg-transparent text-base text-white outline-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option className="bg-neutral-900 text-white" value="">
                  Select category
                </option>
                <option className="bg-neutral-900 text-white">Social</option>
                <option className="bg-neutral-900 text-white">Video</option>
                <option className="bg-neutral-900 text-white">Design</option>
                <option className="bg-neutral-900 text-white">Streaming</option>
                <option className="bg-neutral-900 text-white">Productivity</option>
                <option className="bg-neutral-900 text-white">Entertainment</option>
                <option className="bg-neutral-900 text-white">Shopping</option>
                <option className="bg-neutral-900 text-white">Music</option>
              </select>
              <span className="text-xs text-neutral-500">
                Helps you filter quicker later.
              </span>
            </label>
          </div>

          {/* Username & Password */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Username */}
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Username
              </span>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="text-xs text-neutral-500">
                Use workspace or personal handle.
              </span>
            </label>

            {/* Password */}
            <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Password
              </span>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="text-xs text-neutral-500">
                Choose at least 6 characters.
              </span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-neutral-500">
            By submitting you confirm the entry is safe to store.
          </div>
          <div className="flex flex-1 justify-end gap-3">
            <button
              type="reset"
              onClick={handleReset}
              className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
            >
              Clear
            </button>
            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
            >
              Add Bookmark
            </button>
          </div>
        </div>
      </form>

      {/* Display submitted bookmarks */}
{bookmarks.length > 0 && (
<div className="mt-12">
  {/* Header */}
  {bookmarks.length > 0 && (
    <h2 className="text-2xl font-semibold mb-6 text-white">
      Submitted Bookmarks
    </h2>
  )}

  {/* Bookmark cards grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {bookmarks.map((b, idx) => (
      <div
        key={idx}
        className="p-5 border border-neutral-700 rounded-2xl bg-neutral-800/50 shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-3">
          <span
            className="w-4 h-4 rounded-full border border-neutral-600"
            style={{ backgroundColor: b.color }}
          ></span>
          <span className="text-xs text-neutral-400 uppercase">
            {b.category || "Uncategorized"}
          </span>
        </div>
        <h3 className="text-white font-semibold text-lg truncate">{b.url}</h3>
        <p className="text-neutral-300 text-sm mt-2">
          <strong>Username:</strong> {b.username || "-"}
        </p>
        <p className="text-neutral-300 text-sm">
          <strong>Password:</strong> {b.password ? "••••••" : "-"}</p>
        <p className="text-neutral-400 text-xs mt-3">Favicon Color: {b.color}</p>
      </div>
    ))}
  </div>
</div>

)}


    </div>
  );
};

export default BookmarkForm;
