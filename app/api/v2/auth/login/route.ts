import jwt from "jsonwebtoken";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";
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
    const result = await prisma.users.findFirst({
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
    data.token = await sign(
      { id: result.id, username: result.username },
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

export async function OPTIONS() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}

async function verifyPassword(plainPassword: string, hashedPassword: string) {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  return match; // Returns true if passwords match, false otherwise
}

async function hashPassword(plainPassword: string) {
  const saltRounds = 10; // The number of rounds to use for generating the salt
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

export async function sign(payload: any, secret: string): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60; // one hour

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
}
