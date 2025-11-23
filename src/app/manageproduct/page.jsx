"use client";

import { useState } from "react";
import Link from "next/link";

// Mock product data
const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    price: 79,
    image: "/images/headphones.jpg",
    badge: "Bestseller",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Stylish smartwatch with fitness tracking, heart rate monitoring, and notifications.",
    price: 149,
    image: "/images/smartwatch.jpg",
    badge: "New",
    rating: 4.7,
    reviews: 95,
  },
  // add more products if needed
];

export default function ManageProducts() {
  const [products, setProducts] = useState(initialProducts);

  // Delete product
  const handleDelete = (id) => {
    const filtered = products.filter((product) => product.id !== id);
    setProducts(filtered);
  };

  return (
    <div className="min-h-screen container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-48 bg-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.badge && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
              <p className="text-gray-600 mt-1 line-clamp-2">{item.description}</p>
              <p className="text-lg font-semibold mt-2">${item.price}</p>

              <div className="flex justify-between mt-4">
                <Link
                  href={`/manageproduct/editproduct`}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
