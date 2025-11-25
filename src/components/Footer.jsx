import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold text-amber-400 mb-3">VortexGear</h2>
          <p className="text-gray-400 mb-4">
            Premium gear & gadgets for your tech lifestyle. Quality and trust guaranteed.
          </p>
          <div className="flex space-x-4 text-2xl mt-2">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300"><FaGlobe /></a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Shop</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Headphones</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Smart Watches</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Gaming Gear</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Accessories</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get the latest updates and offers straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-xl bg-gray-800 border border-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white px-5 py-3 rounded-xl hover:bg-amber-400 transition-colors duration-300 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VortexGear — All Rights Reserved.
      </div>
    </footer>
  );
}
