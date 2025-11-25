'use client';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  {
    label: 'Bestseller',
    title: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    price: '$79',
    rating: '★★★★★ (120 reviews)',
    badgeColor: 'bg-yellow-400 text-black',
  },
  {
    label: 'New',
    title: 'Smart Watch',
    description: 'Stylish smartwatch with fitness tracking, heart rate monitoring, and notifications.',
    price: '$149',
    rating: '★★★★☆ (98 reviews)',
    badgeColor: 'bg-blue-500 text-white',
  },
  {
    label: 'Hot',
    title: 'Gaming Mouse',
    description: 'Ergonomic gaming mouse with customizable RGB lighting and programmable buttons.',
    price: '$39',
    rating: '★★★★★ (86 reviews)',
    badgeColor: 'bg-red-500 text-white',
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-2 sm:mb-0 text-center sm:text-left">
            Top Picks
          </h2>
          <Link href="/product" className="text-blue-400 font-semibold hover:underline">
            View All
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl shadow-lg p-6 hover:shadow-amber-500/50 hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            >
              {/* Badge */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${product.badgeColor}`}
              >
                {product.label}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 line-clamp-3">{product.description}</p>

              {/* Price & Rating */}
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-extrabold text-amber-400">{product.price}</p>
                <p className="text-gray-400">{product.rating}</p>
              </div>

              {/* View Details Button */}
              <Link
                href="/product"
                className="mt-4 inline-block text-center bg-amber-600 hover:bg-amber-500 text-white py-2 rounded-xl font-semibold shadow-md transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
