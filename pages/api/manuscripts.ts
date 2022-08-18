import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../components/database/redis";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const manuscripts = await redis.get("manuscripts");
    res.status(200).json({ manuscripts });
  } else if (req.method === "POST") {
    const manuscripts = req.body;
    if (typeof manuscripts === "string") {
      await redis.set("manuscripts", manuscripts);
      res.status(200).json({ manuscripts });
    }
  }
}
