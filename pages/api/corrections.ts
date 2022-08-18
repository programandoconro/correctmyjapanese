import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../components/database/redis";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const corrections = await redis.get("corrections");
    res.status(200).json({ corrections });
  } else if (req.method === "POST") {
    const corrections = req.body;
    if (typeof corrections === "string") {
      await redis.set("corrections", corrections);
      res.status(200).json({ corrections });
    }
  }
}
