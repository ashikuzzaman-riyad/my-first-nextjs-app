import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VortexGear",
  description: "VortexGear creates fast, modern, and high-quality tech products built for style and performance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable}  ${geistMono.variable} antialiased`}
          >
         <AuthProvider>
          <div className="bg-black">
            <Navbar></Navbar>
           <div className="flex-1">{children}</div>
          <Footer></Footer>
          </div>
         </AuthProvider>
        </body>
    </html>
  );
}
