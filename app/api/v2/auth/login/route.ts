import { SignJWT } from "jose";
import prisma from "../../../../../lib/prisma";
import { responseMsg } from "../../../../../messages/response";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    const data = {
      token: "",
    };
    const result = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });
    if (result === null) {
      responseMsg.BAD_REQUEST.message = "Yahh! User tidak ditemukan";
      return NextResponse.json(responseMsg.BAD_REQUEST, { status: 400 });
    }
    const isValid = await verifyPassword(password, result.password);
    if (!isValid) {
      responseMsg.BAD_REQUEST.message = "Yahh! Login gagal!";
      return NextResponse.json(responseMsg.BAD_REQUEST, { status: 400 });
    }
    data.token = await signToken(
      { id: result.id, username: result.username } as any,
      process.env.SECRET_KEY as string
    );
    responseMsg.OK = {
      ...responseMsg.OK,
      message: "Yeay! Berhasil Login",
      data: data,
    };
    return NextResponse.json(responseMsg.OK, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(responseMsg.INTERNAL_ERROR, { status: 500 });
  }
}

async function verifyPassword(plainPassword: string, hashedPassword: string) {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  return match; // Returns true if passwords match, false otherwise
}

async function signToken(payload: any, secret: string): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60; // one hour

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
}
