"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams(); // <-- use this hook in client components
  const { id } = params;      // now id is accessible

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
        const res = await fetch(`http://localhost:5000/product/${id}`);
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
      const res = await fetch(`http://localhost:5000/product/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

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
    <div className="max-w-lg mx-auto p-6 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Edit Product:  {product.name}</h1>
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} className="border p-2 w-full" placeholder="Product Name" required />
        <input name="price" type="number" value={product.price} onChange={handleChange} className="border p-2 w-full" placeholder="Price" required />
        <textarea name="description" value={product.description} onChange={handleChange} className="border p-2 w-full" placeholder="Description" required />
        <input name="image" value={product.image} onChange={handleChange} className="border p-2 w-full" placeholder="Image URL" />
        <input name="badge" value={product.badge} onChange={handleChange} className="border p-2 w-full" placeholder="Badge" />
        <input name="rating" type="number" value={product.rating} onChange={handleChange} className="border p-2 w-full" placeholder="Rating" />
        <input name="reviews" type="number" value={product.reviews} onChange={handleChange} className="border p-2 w-full" placeholder="Reviews" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">Update Product</button>
      </form>
    </div>
  );
}
