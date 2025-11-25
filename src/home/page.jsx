'use client';

import React from 'react';
import { Truck, ShieldCheck, Award, Headset } from 'lucide-react';

const features = [
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-4">
          Why Shop With Us?
        </h2>
        <p className="text-gray-300 mb-16 text-lg sm:text-xl">
          We provide the best experience and services for our valued customers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-amber-500/50 hover:scale-105 transform transition-all duration-500 border border-gray-700 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-5 p-5 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md transition-all duration-300 hover:scale-110">
                <feature.icon className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShopWithUs;
