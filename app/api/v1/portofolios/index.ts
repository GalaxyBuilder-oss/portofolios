import prisma from "../../../../lib/prisma";
import { responseMsg } from "../../../../messages/response";

export default async function handler(req, res) {
  if (req.method === "GET") {
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
      res.status(200).json(responseMsg.OK);
    } catch (error) {
      console.error(error);
      res.status(500).json(responseMsg.INTERNAL_ERROR);
    }
  } else {
      const { id }: { id: number } = req.user;
      if (req.method === "POST") {
        const { projectName, description, status, budget, startDate, endDate } =
          req.body;
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
            responseMsg.BAD_REQUEST.message =
              "Yahh! Projek telah ada di database";
            res.status(400).json(responseMsg.BAD_REQUEST);
            return;
          }
          const isValidDate = Date.parse(startDate) < Date.parse(endDate);
          if (!isValidDate) {
            responseMsg.BAD_REQUEST.message =
              "Yahh! Tanggal mulai tidak boleh lebih dari tanggal selesai";
            res.status(400).json(responseMsg.BAD_REQUEST);
            return;
          }
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
              cover_url:
                "https://portofolio2024.s3.amazonaws.com/1731338032615_Project_thumbnail.png",
              user_id: id,
            },
          });

          responseMsg.OK = {
            ...responseMsg.OK,
            message: "Yeay! Berhasil menambahkan data",
            data: result,
          };
          res.status(201).json(responseMsg.OK);
        } catch (error) {
          console.error(error);
          res.status(500).json(responseMsg.INTERNAL_ERROR);
        }
      } else {
        res.setHeader("Allow", ["GET", "POST"]);
        responseMsg.BAD_REQUEST = {
          ...responseMsg.BAD_REQUEST,
          message: `Method ${req.method} Not Allowed`,
        };
        res.status(400).end(responseMsg.BAD_REQUEST);
      }
  }
}
