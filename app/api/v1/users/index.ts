import prisma from "../../../../lib/prisma";
import { responseMsg } from "../../../../messages/response";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const {
    username,
    email,
    fullName,
    phoneNumber,
    address,
    isVerified,
    password,
    profilePictureUrl,
    coverUrl,
  } = req.body;
    const { id }: { id: number } = req.user;
    if (req.method === "DELETE") {
      try {
        const result = await prisma.users.delete({
          where: {
            id: id,
          },
        });
        if (result === null) {
          responseMsg.BAD_REQUEST.message = "Yahh! User tidak ditemukan";
          res.status(400).json(responseMsg.BAD_REQUEST);
          return;
        }

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
    } else if (req.method === "PUT") {
      try {
        const result = await prisma.users.update({
          where: {
            id: id,
          },
          data: {
            username: username,
            email: email,
            full_name: fullName,
            phone_number: phoneNumber,
            address: address,
            is_verified: isVerified,
            cover: coverUrl,
            profile_picture_url: profilePictureUrl
          },
        });

        responseMsg.OK = {
          ...responseMsg.OK,
          message: "Yeay! Berhasil Update",
          data: result,
        };
        res.status(200).json(responseMsg.OK);
      } catch (error) {
        console.error(error);
        res.status(500).json(responseMsg.INTERNAL_ERROR);
      }
    } else if (req.method === "PATCH") {
      try {
        let bodyData = await prisma.users.findUnique({
          where: {
            id: id,
          },
        });

        if (bodyData === null) {
          responseMsg.BAD_REQUEST.message = "Yahh! User tidak dapat ditemukan";
          res.status(400).json(responseMsg.BAD_REQUEST);
          return;
        }

        if (username && bodyData) bodyData.username = username;
        if (email && bodyData) bodyData.email = email;
        if (fullName && bodyData) bodyData.full_name = fullName;
        if (phoneNumber && bodyData) bodyData.phone_number = phoneNumber;
        if (address && bodyData) bodyData.address = address;
        if ((isVerified !== null || isVerified !== bodyData?.is_verified) && bodyData)
          bodyData.is_verified = isVerified;
        if (password && bodyData) bodyData.password = await hashPassword(password);
        if (profilePictureUrl && bodyData) bodyData.profile_picture_url = profilePictureUrl;
        if (coverUrl && bodyData) bodyData.cover = coverUrl;

          const result = await prisma.users.update({
            where: {
              id: id,
            },
            data: bodyData,
          });

        responseMsg.OK = {
          ...responseMsg.OK,
          message: "Yeay! Berhasil update",
          data: result,
        };
        res.status(200).json(responseMsg.OK);
      } catch (error) {
        console.error(error);
        res.status(500).json(responseMsg.INTERNAL_ERROR);
      }
    } else if (req.method === "GET") {
      try {
        const result = await prisma.users.findUnique({
          where: {
            id: id,
          },
        });
        if (result === null) {
          responseMsg.BAD_REQUEST.message = "Yahh! User tidak dapat ditemukan";
          res.status(400).json(responseMsg.BAD_REQUEST);
          return;
        }

        responseMsg.OK = {
          ...responseMsg.OK,
          data: result,
          message: "Berhasil mendapatkan data",
        };
        res.status(200).json(responseMsg.OK);
      } catch (error) {
        console.error();
        res.status(500).json(responseMsg.INTERNAL_ERROR);
      }
    } else {
      res.status(400).end(responseMsg.BAD_REQUEST);
    }
}

async function hashPassword(plainPassword) {
  const saltRounds = 10; // The number of rounds to use for generating the salt
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}
