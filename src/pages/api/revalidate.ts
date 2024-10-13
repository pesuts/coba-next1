/* eslint-disable @typescript-eslint/no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated?: boolean,
  message?: unknown
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (!req.query.token) {
    return res.status(401).json({ revalidated: true, message: "Token is needed" });
  }

  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ revalidated: true, message: "Token is invalid" });
  }

  if (req.query.data) {
    if (req.query.data === "product") {
      try {
        await res.revalidate("/product/static")
        return res.status(200).json({ revalidated: true, message: "Revalidate success!" });
      } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
    return res.status(404).json({ revalidated: false, message: "Data to revalidate not found" });
  }
  return res.status(500).json({ revalidated: false, message: "Choose data to revalidate" });
}
