
import React from "react";
import Header from "../components/Header";
import BookmarkForm from "../components/BookmarkForm";

const Home = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="max-w-7xl mx-auto ">
        <BookmarkForm />
      </main>
    </div>
  );
};

export default Home;
