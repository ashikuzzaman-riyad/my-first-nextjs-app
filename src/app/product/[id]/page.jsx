import Link from 'next/link'
import React from 'react'



export default async function page({params}) {
    const { id } = await params
     const res = await fetch(`http://localhost:5000/product/${id}`)
  const data =await  res.json()

  return (
 <main className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT: PRODUCT IMAGE */}
    <div className="relative w-full h-[520px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl bg-white">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-full object-cover"
      />

      {/* Badge */}
      {data.badge && (
        <span className="absolute top-6 left-6 bg-black/80 text-white px-5 py-1.5 rounded-full text-sm tracking-wide shadow-xl">
          {data.badge}
        </span>
      )}
    </div>

    {/* RIGHT: DETAILS */}
    <div className="bg-white/70 backdrop-blur-xl p-10 lg:p-14 rounded-3xl shadow-xl">
      
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
        {data.name}
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg mt-5 leading-relaxed">
        {data.description}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-7 h-7 ${
              i < Math.round(data.rating)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-gray-600 text-sm">({data.reviews} reviews)</span>
      </div>

      {/* PRICE + CTA */}
      <div className="mt-10 flex items-center justify-between">
        <p className="text-5xl font-extrabold text-gray-900">
          ${data.price}
        </p>

        <button className="px-10 py-4 bg-black text-white rounded-2xl text-lg font-semibold hover:bg-gray-800 shadow-lg transition-all duration-200 active:scale-95">
          Add to Cart
        </button>
      </div>

      {/* Back Link */}
      <div className="mt-10">
        <Link
          href="/product"
          className="text-blue-600 text-lg font-medium hover:underline"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  </div>
</main>



  )
}
