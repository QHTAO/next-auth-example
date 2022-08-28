import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end(); //Method Not Allowed
  }
  res
    .status(200)
    .json({ user: { id: 6, name: "John Doe" }, jwt: "jkB5&.7Ljdadaa245&bRb" });
}
