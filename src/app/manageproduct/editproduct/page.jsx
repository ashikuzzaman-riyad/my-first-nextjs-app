"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
];

export default function EditProduct() {
  

 

  

  

  return (
    <div className="max-w-4xl  container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

      <form  className="max-w-lg space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            // value={formData.description}
            // onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            name="price"
            // value={formData.price}
            // onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            // value={formData.image}
            // onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

       

        

        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
