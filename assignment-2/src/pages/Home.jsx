
import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

const Home = () => {
  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="max-w-7xl mx-auto ">
        
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
