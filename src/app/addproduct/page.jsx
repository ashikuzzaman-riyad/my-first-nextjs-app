"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    badge: "",
    rating: "",
    reviews: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const router = useRouter();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("");

    try {
      const res = await fetch("https://my-first-next-server.vercel.app/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          rating: Number(formData.rating),
          reviews: Number(formData.reviews),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }

      const data = await res.json();

      setResponseMsg("Product Added Successfully!");

      // Redirect after 1 second
      setTimeout(() => {
        router.push("/product");
      }, 1000);

    } catch (error) {
      console.error(error);
      setResponseMsg("❌ Error submitting product");
    }
  };

  return (
  <div className="max-w-lg mx-auto p-8 bg-gray-800 rounded-3xl shadow-2xl shadow-green-600/50">
  <h2 className="text-3xl font-extrabold mb-6 text-white text-center">
    Add Product
  </h2>

  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Product Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
      required
    />

    <textarea
      name="description"
      placeholder="Product Description"
      value={formData.description}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
      required
    />

    <input
      type="number"
      name="price"
      placeholder="Price"
      value={formData.price}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
      required
    />

    <input
      type="text"
      name="image"
      placeholder="Image URL"
      value={formData.image}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
      required
    />

    <input
      type="text"
      name="badge"
      placeholder="Badge"
      value={formData.badge}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
    />

    <input
      type="number"
      name="rating"
      placeholder="Rating (0–5)"
      value={formData.rating}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
      min="0"
      max="5"
      step="0.1"
    />

    <input
      type="number"
      name="reviews"
      placeholder="Reviews"
      value={formData.reviews}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
    />

    <button
      type="submit"
      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 shadow-lg transition-all duration-200"
    >
      Submit Product
    </button>
  </form>

  {responseMsg && (
    <p className="mt-4 text-center text-white">{responseMsg}</p>
  )}
</div>

  );
}
