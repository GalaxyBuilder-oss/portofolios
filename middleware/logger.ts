import jwt from "jsonwebtoken"
import { responseMsg } from "../messages/response";

export function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    res.setHeader('Access-Control-Allow-Origin', 'https://galaxybuilder.vercel.app');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    const authorization = req.headers.authorization;
    if (authorization) {
        if (authorization.startsWith("Bearer ")) {
            const token = authorization.split(" ")[1];
            try {
                req.user = jwt.verify(token, process.env.SECRET_KEY);
                next();
            } catch (error) {
                console.error(error)
                responseMsg.BAD_REQUEST.message = "Token tidak valid."
                return res.status(400).send(responseMsg.BAD_REQUEST);
            }
        }
        else {
            responseMsg.BAD_REQUEST.message = 'Otorisasi tidak valid (harus "Bearer").'
            return res.status(400).json(responseMsg.BAD_REQUEST);
        }
    }
    else {
        responseMsg.BAD_REQUEST.message = "Anda belum login (tidak ada otorisasi)."
        return res.status(401).send(responseMsg.BAD_REQUEST);
    }
  }