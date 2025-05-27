import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/dashboard"]);
const isTeacherRoute = createRouteMatcher(["/dashboard/teacher"]);
const isStudentRoute = createRouteMatcher(["/dashboard/student"]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();
  const user_role = session.sessionClaims?.metadata?.role;

  if (isAdminRoute(req) && user_role !== "admin") {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }

  if (isTeacherRoute(req) && user_role !== "teacher") {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }

  if (
    isStudentRoute(req) &&
    (user_role === "admin" || user_role === "teacher")
  ) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
