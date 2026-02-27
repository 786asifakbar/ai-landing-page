import React from "react";
const Footer = () => (
  <footer className="border-t border-white/10">
    <div className="container mx-auto px-6 py-6 text-center text-sm">
      © {new Date().getFullYear()} AI Startup. All rights reserved.
    </div>
  </footer>
);

export default Footer;