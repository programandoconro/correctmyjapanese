import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../components/database/redis";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const manuscript = await redis.get("manuscript");
    res.status(200).json({ manuscript });
  } else if (req.method === "POST") {
    const manuscript = req.body;
    if (typeof manuscript === "string") {
      await redis.set("manuscript", manuscript);
      res.status(200).json({ manuscript });
    }
  }
}
