"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email: user.email,
      password: user.password,
    });

    if (res.error) {
      setError("Invalid credentials");
      return;
    }

    router.push("/"); // redirect after login
  };

  return (
   <div className="my-20 flex justify-center items-center px-4">
  <form
    onSubmit={handleLogin}
    className="bg-gray-800 p-10 rounded-3xl shadow-2xl shadow-blue-600 w-full max-w-sm"
  >
    {/* Title */}
    <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
      Login
    </h2>

    {/* Error message */}
    {error && (
      <p className="text-red-500 text-center mb-4">{error}</p>
    )}

    {/* Email */}
    <label className="block mb-2 font-medium text-gray-200">Email</label>
    <input
      type="email"
      className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
      value={user.email}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      required
    />

    {/* Password */}
    <label className="block mb-2 font-medium text-gray-200">Password</label>
    <input
      type="password"
      className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
      value={user.password}
      onChange={(e) => setUser({ ...user, password: e.target.value })}
      required
    />

    {/* Login Button */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-500 shadow-lg transition-all duration-200"
    >
      Login
    </button>

    {/* OR divider */}
    <div className="my-6 text-center text-gray-400 font-medium">OR</div>

    {/* Google Login */}
    <button
      type="button"
      onClick={() => signIn("google")}
      className="w-full bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-500 shadow-lg transition-all duration-200"
    >
      Continue With Google
    </button>

    {/* Toggle Register Link */}
    <p className="mt-6 text-center text-gray-300 text-sm">
      Don't have an account?{" "}
      <a
        href="/register" // or toggle function if using state
        className="text-blue-400 font-medium hover:underline"
      >
        Register
      </a>
    </p>
  </form>
</div>


  );
}
