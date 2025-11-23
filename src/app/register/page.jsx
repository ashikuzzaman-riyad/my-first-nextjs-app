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
    <div className="my-29 flex items-center justify-center px-4">
      <div className="p-6 rounded-xl shadow-2xl shadow-amber-400 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full border p-2 rounded mb-3"
          />
          {errors.email && <p className="text-red-500 mb-2">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full border p-2 rounded mb-4"
          />
          {errors.password && <p className="text-red-500 mb-2">{errors.password.message}</p>}

          <button className="w-full bg-green-600 text-white py-2 rounded-lg">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium">Login</a>
        </p>
      </div>
    </div>
  );
}
