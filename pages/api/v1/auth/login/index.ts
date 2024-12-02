import jwt from "jsonwebtoken";
import prisma from "../../../../../lib/prisma";
import { responseMsg } from "../../../../../messages/response";
import bcrypt from "bcrypt"

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      const result = await prisma.users.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      delete result.id;
      delete result.password;
      responseMsg.OK = {
        ...responseMsg.OK,
        data: result,
        message: "Berhasil mendapatkan data",
      };
      res.status(200).json(responseMsg.OK);
    } catch (error) {
      res.status(500).json(responseMsg.INTERNAL_ERROR);
    }
  } else if (req.method === "POST") {
    const { username, password } = req.body;
    try {
      const data = {
        token: null,
      };
      const result = await prisma.users.findFirst({
        where: {
          username: username,
        },
      });
      if (result === null) {
        responseMsg.BAD_REQUEST.message="Yahh! User tidak ditemukan"
        res.status(400).json(responseMsg.BAD_REQUEST)
        return;
      }
      const isValid = await verifyPassword(password, result.password);
      if (!isValid) {
        responseMsg.BAD_REQUEST.message = "Yahh! Login gagal!";
        res.status(400).send(responseMsg.BAD_REQUEST);
        return;
      }
      data.token = jwt.sign(
        { id: result.id, username: result.username },
        process.env.SECRET_KEY,
        {
          expiresIn: "1d",
        }
      );
      responseMsg.OK = {
        ...responseMsg.OK,
        message: "Yeay! Berhasil Login",
        data: data,
      };
      res.status(200).json(responseMsg.OK);
    } catch (error) {
      console.error(error)
      res.status(500).json(responseMsg.INTERNAL_ERROR)
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    responseMsg.BAD_REQUEST = {
      ...responseMsg.BAD_REQUEST,
      message: `Method ${req.method} Not Allowed`,
    };
    res.status(405).end(responseMsg.BAD_REQUEST);
  }
}

async function verifyPassword(plainPassword, hashedPassword) {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  return match; // Returns true if passwords match, false otherwise
}

async function hashPassword(plainPassword) {
  const saltRounds = 10; // The number of rounds to use for generating the salt
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}
