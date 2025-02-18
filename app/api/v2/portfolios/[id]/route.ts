"use server";
import { Decimal } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { responseMsg } from "../../../../../messages/response";

export async function GET(req: NextRequest, { params }) {

  try {
    const id = params.id;
    console.log('id', id);
    if(id ===null)
      return NextResponse.json(responseMsg.BAD_REQUEST, {status: 400})
    const result = await prisma.portofolio.findFirst({
      where: {
        id: parseInt(id),
      },
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

export async function PUT(req: NextRequest, { params }) {

  try {
    const id = await params.id;
    const { projectName, description, status, budget, startDate, endDate } = await req.json();
    const portofolio = await prisma.portofolio.findFirst({
      where: {
        id: parseInt(id as string),
      },
      include: {
        users: true,
      },
    });

    if (!portofolio) {
      return NextResponse.json({ message: "Portfolio not found" }, { status: 404 });
    }

    if (projectName) portofolio.project_name = projectName;
    if (description) portofolio.description = description;
    if (status) portofolio.status = status;
    if (budget) portofolio.budget = new Decimal(budget);

    if (startDate) portofolio.start_date = new Date(startDate);
    if (endDate) portofolio.end_date = new Date(endDate);

    portofolio.updated_at = new Date();

    const result = await prisma.portofolio.update({
      where: {
        id: parseInt(id as string),
      },
      data: {
        user_id: portofolio.user_id,
        project_name: portofolio.project_name,
        description: portofolio.description,
        status: portofolio.status,
        budget: portofolio.budget,
        start_date: portofolio.start_date,
        end_date: portofolio.end_date,
        updated_at: portofolio.updated_at,
      },
    });

    responseMsg.OK = {
      ...responseMsg.OK,
      message: "Yeay! Data berhasil diupdate",
      data: result,
    };
    return NextResponse.json(responseMsg.OK, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(responseMsg.INTERNAL_ERROR, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }) {

  try {
    const id = params.id;
    const result = await prisma.portofolio.delete({
      where: {
        id: parseInt(id as string),
      },
    });

    responseMsg.OK = {
      ...responseMsg.OK,
      message: "Yeay! Berhasil hapus data",
      data: result,
    };
    return NextResponse.json(responseMsg.OK, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(responseMsg.INTERNAL_ERROR, { status: 500 });
  }
}
