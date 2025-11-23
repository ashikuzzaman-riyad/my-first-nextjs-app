"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle email/password login
  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!res.error) {
      router.push("/"); // redirect home
    } else {
      alert("Login failed");
    }
  };

  // Google login
  const loginWithGoogle = () => {
    signIn("google"); // NextAuth handles redirect automatically
    router.push("/")
  };

  return (
    <div className="my-23 flex items-center justify-center px-4">
      <div className="shadow-2xl shadow-amber-400 p-6 rounded-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <button
          onClick={loginWithGoogle}
          className="w-full bg-red-500 text-white py-2 rounded-lg mb-3 "
        >
          Continue with Google
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full border p-2 rounded mb-3"
          />
          {errors.email && (
            <p className="text-red-500 mb-2">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full border p-2 rounded mb-4"
          />
          {errors.password && (
            <p className="text-red-500 mb-2">{errors.password.message}</p>
          )}

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 font-medium">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
