"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // import useRouter

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
  const router = useRouter(); // initialize router

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add product");

      const data = await res.json();

      // Navigate to the newly added product page
      // Assuming your route is /product/[id] and backend returns the new product's id
      router.push(`/product`);

    } catch (err) {
      console.error(err);
      setResponseMsg("Error submitting product.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-600  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md "
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <input
          type="text"
          name="badge"
          placeholder="Badge (optional)"
          value={formData.badge}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          value={formData.rating}
          onChange={handleChange}
          step="0.1"
          min="0"
          max="5"
          className="w-full p-2 border rounded-md"
        />

        <input
          type="number"
          name="reviews"
          placeholder="Number of Reviews"
          value={formData.reviews}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Submit Product
        </button>
      </form>

      {responseMsg && <p className="mt-4 text-center">{responseMsg}</p>}
    </div>
  );
}
