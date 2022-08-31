import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../storage/redis";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { payload, uid } = JSON.parse(req.body);
  const key = `corrections/${uid}`;
  if (req.method === "POST") {
    const corrections = await redis.get(key);
    res.status(200).json({ corrections });
  } else if (req.method === "PUT") {
    if (typeof payload === "string") {
      await redis.set(key, payload);
      res.status(200).json({ payload });
    }
  }
}
