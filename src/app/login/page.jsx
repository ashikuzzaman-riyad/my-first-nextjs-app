"use client";

import { use,  } from "react";

import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthProvider";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function LoginPage() {
  const { googleSignIn, setLoading, signIn } = use(AuthContext);
  const router = useRouter();
   const { register, handleSubmit,    } = useForm();
 
const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then(() => {
        router.push("/");
        alert("User logged in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

   const handleSignIn = () => {

  googleSignIn()
    .then((res) => {
      setUser(res.user);
    router.push("/");
     setLoading(false);
      
    })
    .catch((error) => {
     
    });
};

  return (
    <div className="flex justify-center my-20 items-center px-4 ">
  <div className="max-w-md w-full bg-gray-800 rounded-3xl shadow-2xl shadow-amber-600/50 p-8 hover:shadow-amber-500/70 transition-all duration-300">
    <h2 className="text-3xl font-extrabold text-center text-amber-400 mb-6">
      Login
    </h2>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all duration-200 hover:border-amber-400"
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
        className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all duration-200 hover:border-amber-400"
      />

      <button
        type="submit"
        className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-amber-500 hover:scale-105 transition-all duration-200"
      >
        Login
      </button>
    </form>

    <div className="text-center text-gray-300 my-4">OR</div>

    <button
      onClick={handleSignIn}
      className="w-full flex items-center justify-center gap-2 border border-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
    >
      <svg
        aria-label="Google logo"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <path d="m0 0H512V512H0" fill="#fff"></path>
          <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
          <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
          <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
          <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
        </g>
      </svg>
      Continue with Google
    </button>

    <p className="text-center text-gray-300 mt-4">
      Don’t have an account?{" "}
      <Link href="/register" className="text-amber-400 font-semibold hover:underline">
        Register
      </Link>
    </p>
  </div>
</div>

  );
}
