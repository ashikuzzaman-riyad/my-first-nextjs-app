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
    <div className="min-h-screen bg-black flex justify-center items-center ">
      <form
        onSubmit={handleLogin}
        className="  p-8 rounded-xl  shadow-2xl shadow-amber-400 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

        {error && (
          <p className="text-red-500 text-center mb-3">{error}</p>
        )}

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-4"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <div className="my-4 text-center text-gray-500">OR</div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          Continue With Google
        </button>
      </form>
    </div>
  );
}
