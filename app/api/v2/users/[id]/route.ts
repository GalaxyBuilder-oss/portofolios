import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { responseMsg } from "../../../../../messages/response";
import bcrypt from "bcrypt";


export async function GET(req: NextRequest, { params }) {
    const id = await params.id;
    try {
        const result = await prisma.users.findFirst({
            where: {
                id: parseInt(id as string),
            }
        });
        if (result === null) {
            responseMsg.BAD_REQUEST.message = "Yahh! pengguna tidak ditemukan";
            return NextResponse.json(responseMsg.BAD_REQUEST, { status: 400 });
        }
        responseMsg.OK = {
            ...responseMsg.OK,
            message: "Yeay! Berhasil mendapatkan data",
            data: result,
        };
        return NextResponse.json(responseMsg.OK, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(responseMsg.INTERNAL_ERROR, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }) {
    const id = await params.id;
    const { username, email, fullName, phoneNumber, address, isVerified, password, profilePictureUrl, coverUrl } = await req.json();

    try {
        const bodyData = await prisma.users.findFirst({
            where: {
                id: parseInt(id as string),
            }
        }) as any;


        if (username !== undefined) bodyData.username = username;
        if (email !== undefined) bodyData.email = email;
        if (fullName !== undefined) bodyData.full_name = fullName;
        if (phoneNumber !== undefined) bodyData.phone_number = phoneNumber;
        if (address !== undefined) bodyData.address = address;
        if (isVerified !== undefined) bodyData.is_verified = isVerified;
        if (password !== undefined) bodyData.password = await hashPassword(password);
        if (profilePictureUrl !== undefined) bodyData.profile_picture_url = profilePictureUrl;
        if (coverUrl !== undefined) bodyData.cover = coverUrl;

        const result = await prisma.users.update({
            where: {
                id: parseInt(id as string),
            },
            data: {
                username: bodyData.username,
                email: bodyData.email,
                full_name: bodyData.full_name,
                phone_number: bodyData.phone_number,
                address: bodyData.address,
                is_verified: bodyData.is_verified,
                password: bodyData.password,
                profile_picture_url: bodyData.profile_picture_url,
                cover: bodyData.cover,
            },
        });

        responseMsg.OK = {
            ...responseMsg.OK,
            message: "Yeay! Berhasil update",
            data: result,
        };
        return NextResponse.json(responseMsg.OK, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(responseMsg.INTERNAL_ERROR, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }) {
    const id = await params.id;

    try {
        const result = await prisma.users.delete({
            where: {
                id: parseInt(id as string),
            },
        });

        responseMsg.OK = {
            ...responseMsg.OK,
            message: "Yeay! Berhasil menghapus data",
            data: result,
        };
        return NextResponse.json(responseMsg.OK, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(responseMsg.INTERNAL_ERROR, { status: 500 });
    }
}

async function hashPassword(plainPassword: string) {
  const saltRounds = 10; // The number of rounds to use for generating the salt
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}