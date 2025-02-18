import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';
import { responseMsg } from '../messages/response';

export async function middleware(req) {
    const {method, url} = req;
    console.log(`${method} ${url}`);
    const res = NextResponse.next();
    res.headers.set('Access-Control-Allow-Origin', 'https://galaxybuilder.vercel.app');

    const authorization = req.headers.get('authorization');
    if (authorization) {
        if (authorization.startsWith("Bearer ")) {
            const token = authorization.split(" ")[1];
            try {
                const secretKey = process.env.SECRET_KEY;
                if (!secretKey) {
                    responseMsg.INTERNAL_ERROR.message = "Secret key is not defined.";
                    return new NextResponse(JSON.stringify(responseMsg.INTERNAL_ERROR), { status: 500 });
                }
                req.user = await verify(token, secretKey);
                return res;
            } catch (error) {
                console.error(error);
                responseMsg.BAD_REQUEST.message = "Token tidak valid.";
                return new NextResponse(JSON.stringify(responseMsg.BAD_REQUEST), { status: 400 });
            }
        } else {
            responseMsg.BAD_REQUEST.message = 'Otorisasi tidak valid (harus "Bearer").';
            return new NextResponse(JSON.stringify(responseMsg.BAD_REQUEST), { status: 400 });
        }
    } else {
        if (req.method === 'GET' && (req.url.includes('/api/v2/portfolios') || req.url.includes('/api/v2/portfolios/:path*') || req.url.includes('api/v2/auth/login') || req.url.includes("/api/v2"))) {
            console.log(req.url);
            return res;
        }
        if (req.method === 'POST' && req.url.includes('api/v2/auth/login')) {
            console.log(req.url);
            return res;
        }
        responseMsg.BAD_REQUEST.message = "Anda belum login (tidak ada otorisasi).";
        return new NextResponse(JSON.stringify(responseMsg.BAD_REQUEST), { status: 401 });
    }
}
async function verify(token: string, secret: string): Promise<any> {
    const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
    // run some checks on the returned payload, perhaps you expect some specific values

    // if its all good, return it, or perhaps just return a boolean
    return payload;
}
