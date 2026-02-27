import React from "react";
const features = [
  "AI Automation",
  "Smart Analytics",
  "API Integration",
  "Cloud Sync",
  "Real-time Insights",
  "Secure Architecture",
];

const Features = () => (
  <section id="features" className="container mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-center">Features</h2>

    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {features.map((item) => (
        <div
          key={item}
          className="p-6 rounded-xl bg-white/5 backdrop-blur-lg
                     hover:-translate-y-2 transition-transform duration-500"
        >
          <h3 className="text-lg font-semibold">{item}</h3>
          <p className="text-sm text-gray-500 mt-2">
            Powerful solution for modern AI startups.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;