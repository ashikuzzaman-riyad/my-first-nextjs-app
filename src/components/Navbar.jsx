"use client";

import Link from "next/link";
import { useSession,  signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className=" shadow-md">
      <div className="container mx-auto flex justify-between p-5 items-center">
        <div>
          <h2 className="text-xl font-bold">Logo</h2>
        </div>

        <nav className="space-x-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
          <Link href="/addproduct">Add Product</Link>
          <Link href="/manageproduct">Manage Products</Link>
        </nav>

        <div className="space-x-5">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : session ? (
            <>
             
              <button
                onClick={() => signOut()}
                className="bg-red-600 px-3 py-2 rounded-2xl text-white shadow hover:bg-red-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <div >
                <Link
                className="bg-amber-600 px-3 py-2 rounded-2xl shadow hover:bg-amber-500 transition mr-3.5"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="bg-amber-600 px-3 py-2 rounded-2xl shadow hover:bg-amber-500 transition"
                href="/register"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
