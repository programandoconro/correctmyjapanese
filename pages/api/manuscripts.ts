import { NextApiRequest, NextApiResponse } from "next";
import store from "../../components/redux/store";
import redis from "../../components/storage/redis";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { uid, payload } = JSON.parse(req.body);
  const key = `manuscripts/${uid}`;
  if (req.method === "POST") {
    const manuscripts = await redis.get(key);
    res.status(200).json({ manuscripts });
  } else if (req.method === "PUT") {
    if (typeof payload === "string" && uid) {
      await redis.set(key, payload);
      res.status(200).json({ manuscripts: payload });
    } else {
      console.log("not writing", uid, payload);
    }
  }
}
