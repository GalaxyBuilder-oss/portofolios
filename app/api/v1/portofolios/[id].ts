import { Decimal } from "@prisma/client/runtime/library";
import prisma from "../../../../lib/prisma";
import { responseMsg } from "../../../../messages/response";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const result = await prisma.portofolio.findFirst({
        where: {
          id: parseInt(req.query.id as string),
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
      return res.status(200).json(responseMsg.OK);
    } catch (error) {
      console.error(error);
      return res.status(500).json(responseMsg.INTERNAL_ERROR);
    }
  } else {
    const { projectName, description, status, budget, startDate, endDate } =
      req.body;
    const { id } = req.query;
    if (req.method === "PUT") {
      try {
        const result = await prisma.portofolio.update({
          where: {
            id: parseInt(id as string),
          },
          data: {
            project_name: projectName,
            description: description,
            status: status,
            budget: parseInt(budget),
            start_date: new Date(startDate),
            end_date: new Date(endDate),
            updated_at: new Date(),
          },
        });

        responseMsg.OK = {
          ...responseMsg.OK,
          message: "Yeay! Update berhasil",
          data: result,
        };
        res.status(200).json(responseMsg.OK);
      } catch (error) {
        console.error(error);
        res.status(500).json(responseMsg.INTERNAL_ERROR);
      }
    } else if (req.method === "PATCH") {
      try {
        const portofolio = await prisma.portofolio.findFirst({
          where: {
            id: parseInt(id as string),
          },
          include: {
            users: true,
          },
        });

        if (!portofolio) {
          res.status(404).json({ message: "Portfolio not found" });
          return;
        }

        if (projectName) portofolio.project_name = projectName;
        if (description) portofolio.description = description;
        if (status) portofolio.status = status;
        if (budget) portofolio.budget = new Decimal(budget);

        // Parse date strings to Date objects
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
        res.status(200).json(responseMsg.OK);
      } catch (error) {
        console.error(error);
        res.status(500).json(responseMsg.INTERNAL_ERROR);
      }
    } else if (req.method === "DELETE") {
      try {
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
        res.status(200).json(responseMsg.OK);
      } catch (error) {
        console.error(error);
        res.status(500).json(responseMsg.INTERNAL_ERROR);
      }
    }
  }
}
