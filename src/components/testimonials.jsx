import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    comment: "Amazing products! Fast delivery and excellent customer service. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4,
    comment: "Great quality and easy shopping experience. Will definitely come back for more.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    comment: "Love this website! The products exceeded my expectations. Highly satisfied.",
  },
];

const UserTestimonials = () => {
  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-amber-400">
          What Our Users Say
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-12">
          Hear from our happy customers who love our products and services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {testimonials.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800/70 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-amber-500/50 transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full mb-4 shadow-md"
              />
              <p className="text-gray-300 italic mb-4">"{user.comment}"</p>
              <div className="flex items-center mb-4 gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < user.rating ? "text-yellow-400" : "text-gray-700"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold text-lg text-amber-400">{user.name}</p>
              <p className="text-gray-400 text-sm">{user.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
