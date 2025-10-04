import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const isPublicRoute = createRouteMatcher([
//   "/sign-in(.*)",
//   "/sign-up(.*)",
//   "/",
//   "/api/webhooks(.*)",
// ]);

export default clerkMiddleware(async (auth, request) => {
  // const { userId, sessionClaims, redirectToSignIn } = await auth();

  // if (userId && !isPublicRoute(request)) {
  //   const url = request.nextUrl.clone();

  //   const response = NextResponse.next();
  //   response.headers.set("x-user-id", userId);

  //   if (sessionClaims?.metadata) {
  //     response.headers.set("x-user-metadata", JSON.stringify(sessionClaims.metadata));
  //   }

  //   return response;
  // }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
