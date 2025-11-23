import React from 'react'

export default function Footer() {
  return (
   <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">My Website</h2>
          <p className="text-gray-400">
            Creating beautiful and user-friendly web experiences with passion and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div className='text-center'>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white text-xl transition">🌐</a>
            <a href="#" className="hover:text-white text-xl transition">📘</a>
            <a href="#" className="hover:text-white text-xl transition">🐦</a>
            <a href="#" className="hover:text-white text-xl transition">📸</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} My Website — All Rights Reserved.
      </div>
    </footer>
  )
}
