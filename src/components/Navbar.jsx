import React from "react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

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
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white dark:bg-white border-b border-gray-200 transition-all duration-500">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-gray-900">
            AI Startup
          </span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="
              flex items-center justify-center
              w-12 h-12 rounded-full
              border border-gray-300
              shadow-lg
              transition-transform duration-300
              hover:scale-110
              active:scale-95
              bg-white
            "
          >
            {dark ? (
              <Sun className="text-yellow-500" size={22} />
            ) : (
              <Moon className="text-gray-700" size={22} />
            )}
          </button>

          {/* CTA */}
          <button className="
            hidden md:block
            bg-gradient-to-r from-indigo-500 to-purple-500
            text-white px-4 py-2 rounded-lg
            shadow-lg
            hover:shadow-purple-500/50
            transition-all duration-300
          ">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;