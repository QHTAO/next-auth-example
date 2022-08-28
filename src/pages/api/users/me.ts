import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end("Method Not Allowed");
  }

  const { authorization } = req.headers;
  const accessToken = authorization && authorization.split(" ")[1];
  if (!accessToken) return res.status(401).end("Not AccessToken");

  const userInfo = {
    id: 6,
    email: "test@tetst.com",
    name: "John Doe",
    createAt: "2022-09-27T10:42:24.489Z",
    updateAt: "2022-09-27T10:42:24.489Z",
  };
  res.status(200).json(userInfo);
}
