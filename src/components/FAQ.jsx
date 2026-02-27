import React from "react";
const faqs = [
  { q: "Is there a free trial?", a: "Yes, you can start free." },
  { q: "Do you offer API access?", a: "Yes in Pro and Enterprise." },
  { q: "Can I cancel anytime?", a: "Absolutely." },
];

const FAQ = () => (
  <section id="faq" className="container mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-center">FAQ</h2>

    <div className="mt-10 space-y-4">
      {faqs.map((item) => (
        <details
          key={item.q}
          className="p-4 rounded-lg bg-white/5 backdrop-blur-lg"
        >
          <summary className="cursor-pointer font-semibold">{item.q}</summary>
          <p className="mt-2 text-gray-500">{item.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQ;