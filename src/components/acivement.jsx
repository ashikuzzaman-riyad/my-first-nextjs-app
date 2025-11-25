import React, { useEffect, useState } from "react";

const Achievements = () => {
  const stats = [
    { id: 1, title: "Products Sold", value: 25000, suffix: "K+", icon: "🛒" },
    { id: 2, title: "Happy Customers", value: 10000, suffix: "K+", icon: "😊" },
    { id: 3, title: "Trusted Brands", value: 120, suffix: "+", icon: "🏆" },
    { id: 4, title: "Awards Won", value: 15, suffix: "+", icon: "🎖️" },
  ];

 

  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-amber-400">
          Our Achievements
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-16">
          We are proud of our journey and milestones reached with our valued customers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-gray-800/70 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-amber-500/50 transition-transform duration-500 hover:scale-105 flex flex-col items-center"
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <p className="text-4xl font-extrabold text-amber-400">
               
                {stat.suffix}
              </p>
              <p className="text-gray-300 mt-3 text-center text-lg">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
