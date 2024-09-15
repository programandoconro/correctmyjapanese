import Redis from "ioredis";

const redis = new Redis(process.env.KV_URL || "", {
  tls: {
    rejectUnauthorized: false,
  },
});

export default redis;
