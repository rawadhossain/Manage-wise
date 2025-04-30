import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const token =
		req.cookies.get("next-auth.session-token")?.value ||
		req.cookies.get("__Secure-next-auth.session-token")?.value;

	// If no token and accessing a protected route
	if (!token && req.nextUrl.pathname.startsWith("/tasks")) {
		return NextResponse.redirect(new URL("/signin", req.url));
	}

	// Allow request to proceed
	const response = NextResponse.next();
	response.headers.set("Access-Control-Allow-Origin", "*");
	return response;
}

export const config = {
	matcher: ["/api/:path*", "/tasks"],
};
