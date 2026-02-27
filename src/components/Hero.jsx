import React from "react";
const Hero = () => (
  <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 items-center">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold">
        Build AI Products<br />Smarter & Faster
      </h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        SaaS-ready landing page template with premium 3D depth and modern UI.
      </p>

      <div className="mt-6 space-x-4">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg">
          Start Free Trial
        </button>

        <button className="border px-6 py-3 rounded-lg">
          Watch Demo
        </button>
      </div>
    </div>

    <div className="hidden md:block">
      <div className="w-full h-72 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 blur-2xl"></div>
    </div>
  </section>
);

export default Hero;