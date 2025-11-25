'use client'; // <-- Add this at the top of the file

import React from 'react';
import { Truck, ShieldCheck, Award, Headset } from 'lucide-react';

const reasons = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your order delivered to your doorstep within 2-3 business days.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Your payment information is processed securely with SSL encryption.',
  },
  {
    icon: Award,
    title: 'Quality Products',
    description: 'We guarantee 100% authentic products sourced from trusted brands.',
  },
  {
    icon: Headset,
    title: '24/7 Support',
    description: 'Our dedicated support team is here to help you anytime, day or night.',
  },
];

const WhyShopWithUs = () => {
  return (
   <section className="py-26 px-4 sm:px-6 lg:px-8 ">
  <div className="max-w-6xl mx-auto text-center">
    {/* Title and Subtitle */}
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
      Why Shop With Us?
    </h2>
    <p className="text-gray-600 mb-12">
      We provide the best experience for our customers.
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {reasons.map((reason, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-500 border border-gray-100"
        >
          {/* Icon Container */}
          <div className="flex items-center justify-center mb-5">
            <div className="p-4 rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 text-blue-600 hover:bg-gradient-to-br hover:from-blue-200 hover:to-blue-300 transition-all duration-300">
              <reason.icon className="w-8 h-8 hover:animate-bounce" />
            </div>
          </div>

          {/* Title and Description */}
          <h3 className="text-xl  text-center font-semibold text-gray-800 mb-3 ">
            {reason.title}
          </h3>
          <p className="text-sm  text-gray-500  text-center">
            {reason.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default WhyShopWithUs;
