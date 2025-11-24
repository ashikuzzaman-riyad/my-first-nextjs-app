import Link from 'next/link'
import React from 'react'

 


export default async function page() {

     const data = await fetch('http://localhost:5000/product')
  const posts = await data.json()
  return (
     
    <main className="min-h-screen container mx-auto p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-amber-400 hover:shadow-xl transition overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-72 bg-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.badge && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
              <p className="text-gray-600 mt-2 line-clamp-2">{item.description}</p>

              <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-semibold text-gray-900">${item.price}</p>
                <Link
                  href={`/product/${item._id}`}
                  className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition"
                >
                  Details
                </Link>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-3 gap-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(item.rating) ? "fill-current" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-500 text-sm">({item.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
