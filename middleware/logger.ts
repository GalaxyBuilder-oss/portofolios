import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { responseMsg } from "../messages/response";

export async function middleware(req: NextRequest) {
  const { method, url, nextUrl } = req;
  console.log(`${method} ${url} ${nextUrl.host}`);
  const res = NextResponse.next();
  res.headers.set(
    "Access-Control-Allow-Origin",
    "https://galaxybuilder.vercel.app"
  );

  const authorization = req.headers.get("authorization");
  if (authorization) {
    if (authorization.startsWith("Bearer ")) {
      const token = authorization.split(" ")[1];
      try {
        const secretKey = process.env.SECRET_KEY;
        if (!secretKey) {
          responseMsg.INTERNAL_ERROR.message = "Secret key is not defined.";
          return NextResponse.json(responseMsg.INTERNAL_ERROR,{status:500});
        }
        const valid = await verify(token, secretKey);
        return valid ? res : NextResponse.json(responseMsg.BAD_REQUEST,{status:400});
      } catch (error) {
        console.error(error);
        responseMsg.BAD_REQUEST.message = "Token tidak valid.";
        return NextResponse.json(responseMsg.BAD_REQUEST,{status:400});
      }
    } else {
      responseMsg.UNAUTHORIZED.message =
        'Otorisasi tidak valid (harus "Bearer").';
      return NextResponse.json(responseMsg.UNAUTHORIZED,{status:401});
    }
  } else {
    const allowedPaths = {
      GET: [
        "/api/v2",
        "/api/v1",
        "/api/json",
        "/api",
      ],
      POST: ["/api/v2/auth/login","/api/json"],
      PUT: ["/api/json"],
      DELETE: ["/api/json"],
    };
    const requestPath =new URL(req.url).pathname;

    if (req.method === "GET" &&
    (allowedPaths.GET.includes(requestPath) || requestPath.startsWith("/api/v2/portfolios") || requestPath.startsWith("/api/json"))) {
      console.log(req.url);
      return res;
    }
    if (req.method === "POST" && allowedPaths.POST.includes(requestPath)) {
      console.log(req.url);
      return res;
    }
    if (req.method === "PUT" && requestPath.startsWith(allowedPaths.PUT[0])) {
      console.log(req.url);
      return res;
    }
    if (req.method === "DELETE" && requestPath.startsWith(allowedPaths.DELETE[0])) {
      console.log(req.url);
      return res;
    }
    return NextResponse.json(responseMsg.UNAUTHORIZED,{status:401});
  }
}
async function verify(token: string, secret: string): Promise<any> {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  // run some checks on the returned payload, perhaps you expect some specific values

    console.log(`Welcome ${payload.username}!`);

  // if its all good, return it, or perhaps just return a boolean
  return payload;
}
