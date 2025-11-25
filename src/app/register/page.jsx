"use client";
import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useContext } from "react";

const Register = () => {
  const { createUser,  } = useContext(AuthContext);
const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        router.push("/")
        const user = result.user;
       
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="flex justify-center  items-center px-4 ">
      <div className="max-w-md w-full bg-gray-800 rounded-3xl shadow-2xl shadow-amber-600/50 p-8 hover:shadow-amber-500/70 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center text-amber-400 mb-6">
          Register Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all duration-200 hover:border-amber-400"
            required
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all duration-200 hover:border-amber-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all duration-200 hover:border-amber-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all duration-200 hover:border-amber-400"
            required
          />

          <input
            type="submit"
            value="Register"
            className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-amber-500 hover:scale-105 transition-all duration-200 cursor-pointer"
          />

          <p className="text-center text-gray-300">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
