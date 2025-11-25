"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [responseMsg, setResponseMsg] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    setResponseMsg("");

    try {
      const res = await fetch("https://my-first-next-server.vercel.app/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          price: Number(data.price),
          rating: Number(data.rating),
          reviews: Number(data.reviews),
        }),
      });

      if (!res.ok) throw new Error("Failed to add product");

      await res.json();
      setResponseMsg("✅ Product Added Successfully!");
      reset();

      setTimeout(() => router.push("/product"), 1000);
    } catch (err) {
      console.error(err);
      setResponseMsg("❌ Error submitting product");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-900 text-gray-100 rounded-3xl shadow-2xl shadow-green-600/50 hover:shadow-green-500/70 transition-all duration-300">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-amber-400">
        Add Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          {...register("name", { required: "Product Name is required" })}
          placeholder="Product Name"
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200 hover:border-green-400"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Product Description"
          rows={4}
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200 hover:border-green-400"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}

        <input
          type="number"
          {...register("price", { required: "Price is required", min: 0 })}
          placeholder="Price"
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200 hover:border-green-400"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        <input
          {...register("image", { required: "Image URL is required" })}
          placeholder="Image URL"
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200 hover:border-green-400"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <input
          {...register("badge")}
          placeholder="Badge"
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200 hover:border-green-400"
        />

        <input
          type="number"
          {...register("rating", { min: 0, max: 5 })}
          placeholder="Rating (0–5)"
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200 hover:border-green-400"
        />

        <input
          type="number"
          {...register("reviews", { min: 0 })}
          placeholder="Reviews"
          className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200 hover:border-green-400"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-green-500 hover:scale-105 transition-all duration-200"
        >
          Submit Product
        </button>
      </form>

      {responseMsg && (
        <p className="mt-4 text-center text-green-400 font-medium">{responseMsg}</p>
      )}
    </div>
  );
}
