import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function mainMiddleware(req: NextRequest) { 
  const res = NextResponse.next();
  return res;
  // const isLogin = false;
  // if (isLogin) { 
  //   return NextResponse.next();
  // }
  // return NextResponse.redirect(new URL("/auth/login", req.url))
}

export default withAuth(mainMiddleware, ["/profile", "/admin"]);

// export const config = {
//   matcher: ["/product/:path*", "/about"]
// }