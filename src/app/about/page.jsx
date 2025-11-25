import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
   <main className=" py-16 px-6">
  <div className="max-w-5xl mx-auto">

    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-white">
        About <span className="text-blue-500">Our Store</span>
      </h1>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
        We provide high-quality products with fast delivery and trusted customer support.
      </p>
    </div>

    {/* Image + Text Section */}
    <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
      <div>
        <h2 className="text-3xl font-semibold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
          <a href="#who-we-are">Who We Are</a>
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Our store was created with the vision of delivering premium products at the best price.
          From tech gadgets to fashion accessories, we offer a wide range of categories designed
          to meet your needs.
          <br /><br />
          Customer satisfaction is our top priority — we ensure product quality, verified suppliers,
          and 24/7 support to help you shop confidently.
        </p>
      </div>

      <div className="w-full h-72 bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-500 hover:scale-105 transition-transform duration-300">
        <img
          src="https://i.ibb.co.com/gbrT2R5t/images-q-tbn-ANd9-Gc-Tnu-NLmv-RAJ5-QIwn8-ZMn-F-7kdfz-Lpn2-CTXr-Cw-s.jpg"
          alt="About our store"
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* Mission Section */}
    <div className="bg-gray-900 shadow-lg rounded-3xl p-10 mb-16 hover:shadow-amber-500 hover:scale-105 transition-all duration-300 group">
      <h2 className="text-3xl font-semibold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
        <a href="#our-mission">Our Mission</a>
      </h2>
      <p className="text-gray-300 leading-relaxed text-lg">
        Our mission is simple: provide quality, affordability, and trust in every purchase.
        We work closely with verified manufacturers and continue improving our platform to give
        you the best online shopping experience.
      </p>
    </div>

    {/* Values Section */}
    <div>
      <h2 className="text-3xl font-semibold text-white text-center mb-8 hover:text-blue-400 transition-colors duration-300">
        <a href="#why-trust-us">Why People Trust Us</a>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-amber-500 hover:scale-105 transition-all duration-300 group">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
            Quality Products
          </h3>
          <p className="text-gray-300 text-lg">
            We handpick items ensuring high standards and durability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-amber-500 hover:scale-105 transition-all duration-300 group">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
            Fast Delivery
          </h3>
          <p className="text-gray-300 text-lg">
            We deliver your products safely and quickly.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-amber-500 hover:scale-105 transition-all duration-300 group">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
            24/7 Support
          </h3>
          <p className="text-gray-300 text-lg">
            Our support team is always ready to help you anytime.
          </p>
        </div>
      </div>
    </div>

    {/* Optional CTA */}
    <div className="text-center mt-16">
      <Link
        href="/contact"
        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:from-blue-400 hover:to-indigo-500 transition-all duration-300"
      >
        Contact Us
      </Link>
    </div>

  </div>
</main>



  )
}
