import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../storage/redis";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { payload, uid, index } = JSON.parse(req.body);
  const key = `differences/${uid}`;
  if (req.method === "POST") {
    const differences = await redis.lrange(key, 0, -1);
    res.status(200).json({ differences });
  } else if (req.method === "PUT") {
    if (typeof payload === "object") {
      //await redis.del(key);
      await redis.lpush(key, JSON.stringify(payload));
      res.status(200).json({ payload });
    }
  } else if (req.method === "PATCH") {
    if (typeof payload === "object") {
      await redis.lset(key, index, JSON.stringify(payload));

      res.status(200).json({ payload });
    }
  }
}
