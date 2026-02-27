import React from "react";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 dark:bg-black/30 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            AI Startup
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-lg border"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>

          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;