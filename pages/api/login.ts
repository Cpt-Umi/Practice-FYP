import connectToDb from "../../lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

// type user = {
//   name?: string;
//   address?: string;
//   role?: string;
//   exists: boolean;
//   message: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const {
      query: { address },
    } = req;

    try {
      const db = await connectToDb();

      let user = await db.collection("actors").findOne({ address: address });
      if (user !== null) {
        res.status(200).json({
          user,
          exists: true,
          message: "Login Successful",
        });
      } else {
        res.status(404).json({
          exists: false,
          message: "User does not exists, please signup",
        });
      }
    } catch (err) {
      res.status(500).json({ exists: false, message: "Server failure" });
    }
  }
}
