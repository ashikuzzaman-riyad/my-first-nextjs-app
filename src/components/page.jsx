'use client';
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
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Top Picks</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 w-90 hover:-translate-y-1 transition-transform duration-300"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${product.badgeColor}`}>
              {product.label}
            </span>
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            {showDetails && (
              <div className="text-sm text-gray-700 space-y-2">
                <p>{product.description}</p>
                <p className="font-bold text-gray-900">{product.price}</p>
                <p className="text-gray-500">{product.rating}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        {showDetails ? 'Hide Details' : 'Show All'}
      </button>
    </div>
  );
}