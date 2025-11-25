"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams(); // <-- use this hook in client components
  const { id } = params; // now id is accessible

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    badge: "",
    rating: "",
    reviews: "",
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://my-first-next-server.vercel.app/product/${id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://my-first-next-server.vercel.app/product/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        }
      );

      if (res.ok) {
        alert("Product updated!");
        router.push("/manageproduct");
      } else {
        console.error("Update failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
   <div className="max-w-lg mx-auto p-8 bg-gray-900 text-gray-100 rounded-3xl shadow-2xl shadow-amber-400">
  <h1 className="text-3xl font-bold mb-6 text-center text-amber-400">
    Edit Product: {product.name}
  </h1>

  <form className="space-y-5" onSubmit={handleSubmit}>
    <input
      name="name"
      value={product.name}
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-700 bg-gray-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-gray-400 outline-none transition-all duration-200 hover:border-amber-500"
      placeholder="Product Name"
      required
    />

    <input
      name="price"
      type="number"
      value={product.price}
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-700 bg-gray-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-gray-400 outline-none transition-all duration-200 hover:border-amber-500"
      placeholder="Price"
      required
    />

    <textarea
      name="description"
      value={product.description}
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-700 bg-gray-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-gray-400 outline-none transition-all duration-200 hover:border-amber-500"
      placeholder="Description"
      rows={4}
      required
    />

    <input
      name="image"
      value={product.image}
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-700 bg-gray-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-gray-400 outline-none transition-all duration-200 hover:border-amber-500"
      placeholder="Image URL"
    />

    <input
      name="badge"
      value={product.badge}
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-700 bg-gray-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-gray-400 outline-none transition-all duration-200 hover:border-amber-500"
      placeholder="Badge"
    />

    <input
      name="rating"
      type="number"
      value={product.rating}
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-700 bg-gray-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-gray-400 outline-none transition-all duration-200 hover:border-amber-500"
      placeholder="Rating"
      min="0"
      max="5"
      step="0.1"
    />

    <input
      name="reviews"
      type="number"
      value={product.reviews}
      onChange={handleChange}
      className="w-full p-3 rounded-xl border border-gray-700 bg-gray-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-gray-400 outline-none transition-all duration-200 hover:border-amber-500"
      placeholder="Reviews"
      min="0"
    />

    <button
      type="submit"
      className="w-full py-3 bg-amber-500 text-gray-900 font-bold rounded-xl shadow-lg hover:bg-amber-400 transition-all duration-200 hover:scale-105"
    >
      Update Product
    </button>
  </form>
</div>

  );
}
