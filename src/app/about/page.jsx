import React from 'react'

export default function page() {
  return (
    <main className=" bg-gray-300 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">Our Store</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide high-quality products with fast delivery and trusted customer support.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our store was created with the vision of delivering premium products at the best price.
              From tech gadgets to fashion accessories, we offer a wide range of categories designed
              to meet your needs.
              <br/><br/>
              Customer satisfaction is our top priority — we ensure product quality, verified suppliers,
              and 24/7 support to help you shop confidently.
            </p>
          </div>

          <div className="w-full h-72 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About our store"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white shadow-lg rounded-3xl p-10 mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is simple: provide quality, affordability, and trust in every purchase.
            We work closely with verified manufacturers and continue improving our platform to give
            you the best online shopping experience.
          </p>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 text-center m===">
            Why People Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Products
              </h3>
              <p className="text-gray-600">
                We handpick items ensuring high standards and durability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                We deliver your products safely and quickly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our support team is always ready to help you anytime.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
