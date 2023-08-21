import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// ***** protectedRoutes *****
const protectedRoutes = ["/dashboard/:path*"];

// ***** publicRoutes *****
const publicRoutes = ["/", "/signin"];

// ***** middleware *****
export default async function middleware(req) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  if (publicRoutes?.includes(req?.nextUrl?.pathname) && isAuthenticated)
    return NextResponse?.redirect(new URL("/dashboard", req?.url));
  const authMiddleware = withAuth({
    pages: {
      signIn: `/signin`,
    },
  });
  return authMiddleware(req);
}

export const config = { matcher: protectedRoutes };
