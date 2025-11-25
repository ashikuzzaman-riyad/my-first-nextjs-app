"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className=" my-20 flex justify-center items-center px-4">
  <div className="p-10 rounded-3xl shadow-2xl shadow-green-600/50 w-full max-w-sm bg-gray-800/80 backdrop-blur-md">
    <h2 className="text-3xl font-extrabold text-white text-center mb-6">
      Register
    </h2>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all duration-200"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      {/* Register Button */}
      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 shadow-lg transition-all duration-200"
      >
        Register
      </button>
    </form>

    {/* Login Link */}
    <p className="mt-6 text-center text-gray-300 text-sm">
      Already have an account?{" "}
      <a href="/login" className="text-blue-400 font-medium hover:underline">
        Login
      </a>
    </p>
  </div>
</div>

  );
}
