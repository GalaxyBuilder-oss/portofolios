import prisma from "../../../../../lib/prisma";
import { responseMsg } from "../../../../../messages/response";
import bcrypt from "bcrypt"

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://galaxybuilder.vercel.app, http://localhost:3000'); // Replace with your frontend URL
  if (req.method === "POST") {
    const {
      username,
      email,
      password,
      fullName,
      phoneNumber,
      address,
    } = req.body;
    const hashedPassword = await hashPassword(password);
    try {
      const isRegistered = await prisma.users.findFirst({
        where: {
          OR: [
            {
              email: email
            },
            {
              username: username
            }
          ]
        }
      })

      if (isRegistered) {
        responseMsg.BAD_REQUEST.message = "User telah terdaftar"
        res.status(400).json(responseMsg.BAD_REQUEST)
        return;
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
          profile_picture_url: "https://portofolio2024.s3.amazonaws.com/1731337737061_peakpx.jpg",
          cover: "https://images.unsplash.com/photo-1658579222223-ca243ef7c520?q=80&w=1470&auto=format&fit=crop"
        },
      });
      responseMsg.OK = {
        ...responseMsg.OK,
        message: "Yeay! Berhasil mendaftar",
        data: result,
      };
      res.status(201).json(responseMsg.OK);
    } catch (error) {
      console.error(error)
      res.status(500).json(responseMsg.INTERNAL_ERROR)
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    responseMsg.BAD_REQUEST = {
      ...responseMsg.BAD_REQUEST,
      message: `Method ${req.method} Not Allowed`
    }
    res.status(400).end(responseMsg.BAD_REQUEST);
  }
}

async function hashPassword(plainPassword) {
  const saltRounds = 10; // The number of rounds to use for generating the salt
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}
