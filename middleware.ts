import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req, evt) => {
  const isProtected = isProtectedRoute(req);

  if (isProtected) {
    const { userId } = await auth(); // Call auth() to retrieve authentication details
    if (!userId) {
      // Redirect unauthenticated users to the sign-in page
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);

      return new Response(null, {
        status: 302,
        headers: { Location: signInUrl.toString() },
      });
    }
  }

  return NextResponse.next(); // Allow request to continue for non-protected routes
});

// Define protected routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/']);

export const config = {
  matcher: [
    // Skip internal Next.js routes and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run middleware for API and tRPC routes
    '/(api|trpc)(.*)',
  ],
};
