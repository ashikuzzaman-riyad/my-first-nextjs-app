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
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-8 relative  ">
  {/* Title and "View All" link */}
  <div >
    <h2 className="text-3xl font-bold text-white text-center">Top Picks</h2>
    <Link
      href="/product"
      className="text-blue-400  font-semibold hover:underline"
    >
     <p className='text-right container '> View All</p>
    </Link>
  </div>

  {/* Product Cards */}
  <div className="flex flex-wrap justify-center gap-6">
    {products.map((product, index) => (
      <div
        key={index}
        className="bg-gray-800 rounded-xl shadow-lg p-6 w-90 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
      >
        {/* Badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${product.badgeColor}`}
        >
          {product.label}
        </span>

        {/* Product Title */}
        <h3 className="text-xl font-semibold mb-2 text-white">{product.title}</h3>

        {/* Product Info */}
        <p className="font-bold text-gray-200">{product.price}</p>
        <p className="text-gray-400">{product.rating}</p>
      </div>
    ))}
  </div>
</div>

  );
}