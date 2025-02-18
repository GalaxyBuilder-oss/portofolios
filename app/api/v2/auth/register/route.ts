import prisma from "../../../../../lib/prisma";
import { responseMsg } from "../../../../../messages/response";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, email, password, fullName, phoneNumber, address } = await req.json();
  const hashedPassword = await hashPassword(password);

  try {
    const isRegistered = await prisma.users.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username }
        ]
      }
    }) ? true : false;

    if (isRegistered) {
      responseMsg.BAD_REQUEST.message = "User telah terdaftar";
      return NextResponse.json(responseMsg.BAD_REQUEST, { status: 400 });
    }

    const result = await prisma.users.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        full_name: fullName,
        phone_number: phoneNumber,
        address: address,
        is_active: true,
        profile_picture_url: "",
        cover: ""
      },
    });

    responseMsg.OK = {
      ...responseMsg.OK,
      message: "Yeay! Berhasil mendaftar",
      data: result,
    };
    return NextResponse.json(responseMsg.OK, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(responseMsg.INTERNAL_ERROR, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}

async function hashPassword(plainPassword: string) {
  const saltRounds = 10; // The number of rounds to use for generating the salt
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}