// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/libs/firebase/service";
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
  // const data = [
  //   {
  //   id: 1,
  //   name: "Baju Baru",
  //   price: 500000,
  //   size: "xl"
  // },
  //   {
  //   id: 2,
  //   name: "Baju Lama",
  //   price: 100000,
  //   size: "l"
  // },
  // ]
  const data = await retrieveData("products");
  res.status(200).json({ status: "success", data });
}
