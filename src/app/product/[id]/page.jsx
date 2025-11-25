import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic"; // important for Vercel

export default async function Page({ params }) {
  const { id } =await params; 

  const res = await fetch(
    `https://my-first-next-server.vercel.app/product/${id}`,
    { cache: "no-store" } // avoid prerender errors
  );

  if (!res.ok) {
    return <h1 className="text-white text-3xl p-10">Product Not Found</h1>;
  }

  const data = await res.json();

  return (
    <main className="min-h-screen  text-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT: PRODUCT IMAGE */}
    <div className="relative w-full h-[520px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl bg-gray-800">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />

      {data.badge && (
        <span className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm tracking-wide shadow-lg">
          {data.badge}
        </span>
      )}
    </div>

    {/* RIGHT: DETAILS */}
    <div className="bg-gray-800/70 backdrop-blur-md p-10 lg:p-14 rounded-3xl shadow-xl border border-gray-700">
      <h1 className="text-5xl font-extrabold text-white leading-tight">
        {data.name}
      </h1>

      <p className="text-gray-300 text-lg mt-5 leading-relaxed">
        {data.description}
      </p>

      {/* RATING */}
      <div className="flex items-center gap-2 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-7 h-7 ${
              i < Math.round(data.rating)
                ? "text-yellow-400"
                : "text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0..." />
          </svg>
        ))}
        <span className="text-gray-400 text-sm">
          ({data.reviews} reviews)
        </span>
      </div>

      {/* PRICE & ADD TO CART */}
      <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <p className="text-5xl font-extrabold text-white">
          ${data.price}
        </p>

        <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold hover:bg-blue-500 shadow-lg transition-all duration-200 active:scale-95">
          Add to Cart
        </button>
      </div>

      {/* BACK LINK */}
      <div className="mt-10">
        <Link
          href="/products"
          className="text-blue-400 text-lg font-medium hover:underline"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  </div>
</main>

  );
}
