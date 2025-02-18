"use server";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { responseMsg } from "../../../../messages/response";

export async function GET(req: NextRequest) {

    const token = req.headers.get("cookie")?.split("=")[1];
    try {
        const payload = await verify(token as string, process.env.SECRET_KEY as string);
        const result = await prisma.users.findMany({
            where: {
                id: payload.id,
            }
        });
        responseMsg.OK = {
            ...responseMsg.OK,
            message: "Yeay! Berhasil mendapatkan data",
            data: result,
        };
        console.log(result);
        return NextResponse.json(responseMsg.OK);
    } catch (error) {
        console.error(error);
        return NextResponse.json(responseMsg.INTERNAL_ERROR);
    }
}
async function verify(token: string, secret: string): Promise<any> {
    const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
    // run some checks on the returned payload, perhaps you expect some specific values

    // if its all good, return it, or perhaps just return a boolean
    return payload;
}
