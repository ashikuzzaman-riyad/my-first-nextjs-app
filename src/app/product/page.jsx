import Link from 'next/link'
import React from 'react'

const product =
 [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "High-quality wireless headphones with noise cancellation and long battery life.",
    "price": 79,
    "image": "/images/headphones.jpg",
    "badge": "Bestseller",
    "rating": 4.5,
    "reviews": 120
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "description": "Stylish smartwatch with fitness tracking, heart rate monitoring, and notifications.",
    "price": 149,
    "image": "/images/smartwatch.jpg",
    "badge": "New",
    "rating": 4.7,
    "reviews": 95
  },
  {
    "id": 3,
    "name": "Gaming Mouse",
    "description": "Ergonomic gaming mouse with customizable RGB lighting and programmable buttons.",
    "price": 39,
    "image": "/images/mouse.jpg",
    "badge": "Hot",
    "rating": 4.6,
    "reviews": 80
  },
  {
    "id": 4,
    "name": "Mechanical Keyboard",
    "description": "Compact mechanical keyboard with tactile keys and customizable backlight.",
    "price": 69,
    "image": "/images/keyboard.jpg",
    "badge": "Bestseller",
    "rating": 4.8,
    "reviews": 102
  },
  {
    "id": 5,
    "name": "Portable Speaker",
    "description": "Bluetooth portable speaker with deep bass and waterproof design.",
    "price": 59,
    "image": "/images/speaker.jpg",
    "badge": "Trending",
    "rating": 4.4,
    "reviews": 70
  },
  {
    "id": 6,
    "name": "Laptop Backpack",
    "description": "Durable backpack with padded laptop compartment and multiple storage pockets.",
    "price": 89,
    "image": "/images/backpack.jpg",
    "badge": "Popular",
    "rating": 4.6,
    "reviews": 110
  },
  {
    "id": 7,
    "name": "Wireless Charger",
    "description": "Fast wireless charger compatible with most smartphones and Qi-enabled devices.",
    "price": 29,
    "image": "/images/charger.jpg",
    "badge": "New",
    "rating": 4.3,
    "reviews": 55
  },
  {
    "id": 8,
    "name": "Action Camera",
    "description": "4K action camera with waterproof case and wide-angle lens.",
    "price": 129,
    "image": "/images/camera.jpg",
    "badge": "Hot",
    "rating": 4.7,
    "reviews": 85
  },
  {
    "id": 9,
    "name": "VR Headset",
    "description": "Immersive VR headset for gaming and virtual experiences with adjustable straps.",
    "price": 199,
    "image": "/images/vr.jpg",
    "badge": "Trending",
    "rating": 4.5,
    "reviews": 65
  },
  {
    "id": 10,
    "name": "Fitness Tracker",
    "description": "Waterproof fitness tracker with heart rate monitor, sleep tracking, and step counter.",
    "price": 49,
    "image": "/images/fitness.jpg",
    "badge": "Popular",
    "rating": 4.4,
    "reviews": 90
  }
]


export default async function page() {

//      const data = await fetch('/product')
//   const posts = await data.json()
  return (
     
    <main className="min-h-screen container mx-auto p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {product.map((item) => (
          <div
            key={item.id}
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
                  href={`/product/${item.id}`}
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
