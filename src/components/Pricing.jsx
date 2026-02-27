import React from "react";

const plans = [
  { name: "Starter", price: "$9", desc: "Basic features" },
  { name: "Pro", price: "$29", desc: "Best for startups", popular: true },
  { name: "Enterprise", price: "$99", desc: "Custom solutions" },
];

const Pricing = () => (
  <section id="pricing" className="container mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-center">Pricing</h2>

    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`p-6 rounded-xl backdrop-blur-lg border
            ${plan.popular ? "border-purple-500 scale-105" : "border-white/10"}`}
        >
          {plan.popular && (
            <span className="text-xs bg-purple-500 px-2 py-1 rounded">
              Popular
            </span>
          )}

          <h3 className="text-xl font-semibold mt-2">{plan.name}</h3>
          <p className="text-3xl font-bold mt-4">{plan.price}</p>
          <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>

          <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg">
            Get Started
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;