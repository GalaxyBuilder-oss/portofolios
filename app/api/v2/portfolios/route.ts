"use server";
import {
  PutObjectCommand,
  S3Client
} from "@aws-sdk/client-s3";
import prisma from "../../../../lib/prisma";
import { responseMsg } from "../../../../messages/response";
import { NextRequest, NextResponse } from 'next/server';

const Bucket = process.env.AMPLIFY_BUCKET;
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function GET() {
  try {
    const result = await prisma.portofolio.findMany({
      include: {
        users: true,
      },
    });
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

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get('id') || '0', 10);
  const { projectName, description, status, budget, startDate, endDate, coverUrl } = await req.json();
  try {
    const isExisted = await prisma.portofolio.findFirst({
      where: {
        AND: [
          {
            project_name: projectName,
          },
          { user_id: id },
        ],
      },
    });
    if (isExisted) {
      responseMsg.BAD_REQUEST.message = "Yahh! Projek telah ada di database";
      return NextResponse.json(responseMsg.BAD_REQUEST, { status: 400 });
    }
    const isValidDate = Date.parse(startDate) < Date.parse(endDate);
    if (!isValidDate) {
      responseMsg.BAD_REQUEST.message = "Yahh! Tanggal mulai tidak boleh lebih dari tanggal selesai";
      return NextResponse.json(responseMsg.BAD_REQUEST, { status: 400 });
    }
    const response = (file: File) => {
      let url = '';
      file.arrayBuffer().then((arrayBuffer) => {
        const date = new Date().toISOString().replace(/:/g, "-");
        const Body = Buffer.from(arrayBuffer);
        const Key = date + "_" + file.name;
        s3.send(new PutObjectCommand({ Bucket, Key, Body })).then(() => {
          url = `https://${Bucket}.s3.amazonaws.com/${Key}`;
        });
      });
      return url;
    };

    const result = await prisma.portofolio.create({
      data: {
        project_name: projectName,
        description: description,
        budget: budget,
        status: status,
        start_date: new Date(startDate),
        end_date: new Date(endDate),
        created_at: new Date(),
        updated_at: null,
        cover_url: coverUrl ? response(coverUrl) : null,
        user_id: id,
      },
    });

    responseMsg.OK = {
      ...responseMsg.OK,
      message: "Yeay! Berhasil menambahkan data",
      data: result,
    };
    return NextResponse.json(responseMsg.OK, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(responseMsg.INTERNAL_ERROR, { status: 500 });
  }
}
