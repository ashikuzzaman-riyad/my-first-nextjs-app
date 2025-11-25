"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [responseMsg, setResponseMsg] = useState("");

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://my-first-next-server.vercel.app/product",
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setResponseMsg("Error loading products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(
        `https://my-first-next-server.vercel.app/product/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Failed to delete product");

      setProducts((prev) => prev.filter((product) => product._id !== id));
      setResponseMsg("Product deleted successfully!");
    } catch (err) {
      console.error(err);
      setResponseMsg("Error deleting product.");
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-white">Loading products...</p>;

  return (
    <div className="container mx-auto mt-10">

      {/* Response Message */}
      {responseMsg && (
        <p className="mb-4 text-center text-yellow-300">{responseMsg}</p>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
          
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-700">Image</th>
              <th className="px-4 py-2 border border-gray-700">Name</th>
              <th className="px-4 py-2 border border-gray-700">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-gray-900 text-gray-100">
            {products.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="px-4 py-2 border border-gray-700">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>

                <td className="px-4 py-2 border border-gray-700">
                  {item.name}
                </td>

                <td className="px-4 py-2 border border-gray-700 space-x-2">
                  <Link
                    href={`/manageproduct/${item._id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Edit
                  </Link>

                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
