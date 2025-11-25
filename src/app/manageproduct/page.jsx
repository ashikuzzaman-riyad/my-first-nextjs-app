"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [responseMsg, setResponseMsg] = useState("");

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://my-first-next-server.vercel.app/product");

      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setResponseMsg("Error loading products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://my-first-next-server.vercel.app/product/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete product");

      setProducts(products.filter((product) => product._id !== id));
      setResponseMsg("Product deleted successfully!");
    } catch (err) {
      console.error(err);
      setResponseMsg("Error deleting product.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  return (
    <>
     
<div className="container mx-auto">
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
    <tr key={item._id} className="hover:bg-gray-700 transition-colors duration-200">
      <td className="px-4 py-2 border border-gray-700">
        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" width={48} height={48}/>
      </td>
      <td className="px-4 py-2 border border-gray-700">{item.name}</td>
      <td className="px-4 py-2 border border-gray-700 space-x-2">
        <Link  href={`/manageproduct/${item._id}`}
 className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Edit
        </Link>
        <button
          className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
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

    </>
  );
}
