import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Founder",
    review: "Amazing product! Saved me hours of development.",
  },
  {
    name: "Sara Khan",
    role: "Product Manager",
    review: "Great UI and easy to use. Highly recommended.",
  },
  {
    name: "Alex Smith",
    role: "Developer",
    review: "Clean code and modern design. Love it!",
  },
];

const Testimonials = () => (
  <section className="container mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-center">Testimonials</h2>

    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {testimonials.map((item) => (
        <div key={item.name} className="p-6 rounded-xl bg-white/5 backdrop-blur-lg">
          <div className="text-yellow-400">★★★★★</div>
          <p className="mt-2 text-gray-500">{item.review}</p>

          <div className="mt-4">
            <h4 className="font-semibold">{item.name}</h4>
            <span className="text-sm text-gray-400">{item.role}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;