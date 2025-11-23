import Link from 'next/link'
import React from 'react'



export default async function page({params}) {
    const { id } = await params
     const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const posts = await data.json()
  return (
 
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden md:flex">
        {/* Product Image */}
        <div className="md:w-1/2 h-96 md:h-auto bg-gray-200 relative">
          <img
            src={posts.image}
            alt={posts.name}
            className="w-full h-full object-cover"
          />
          {posts.badge && (
            <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{posts.name}</h1>
            <p className="text-gray-600 mt-4">{posts.description}</p>

            <div className="flex items-center mt-6 gap-2 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.round(posts.rating) ? "fill-current" : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-500 text-sm">({posts.reviews} reviews)</span>
            </div>
          </div>

          {/* Price + Button */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-900">${posts.price}</p>
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition">
              Add to Cart
            </button>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <Link
              href="/products"
              className="text-blue-600 hover:underline"
            >
              &larr; Back to Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
