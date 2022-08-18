import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../components/database/redis";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const correction = await redis.get("correction");
    res.status(200).json({ correction });
  } else if (req.method === "POST") {
    const correction = req.body;
    if (typeof correction === "string") {
      await redis.set("correction", correction);
      res.status(200).json({ correction });
    }
  }
}
