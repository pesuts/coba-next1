// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/libs/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

// type ProductData = {
//   id: number;
//   name: string;
//   price: number;
//   size: string;
// };

type Data = {
  // data: ProductData[];
  data: unknown;
  status: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  const productId = req.query.product ? req.query.product[1] : undefined;

  if (productId !== undefined) { 
    const data = await retrieveDataById("products", productId);
    res.status(200).json({ status: "success", data });
    return;
  }

  const data = await retrieveData("products");
  res.status(200).json({ status: "success", data });
}
