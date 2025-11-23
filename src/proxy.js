// app/middleware/proxy.js
import { NextResponse } from "next/server";

export function proxy(request) {
  // Example: redirect to login if user not authenticated
  const token = request.cookies.get("next-auth.session-token"); // or your session cookie name
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If authenticated, continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/addproduct/:path*", "/manageproduct/:path*"],
};
