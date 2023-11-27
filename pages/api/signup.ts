import connectToDb from "../../lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, address, role } = req.body;

    try {
      const db = await connectToDb();

      let existingUser = await db.collection("actors").findOne({ address });

      if (existingUser !== null) {
        res.status(422).json({ message: "User address already exists!" });
        db.close();
      }

      existingUser = await db.collection("actors").findOne({ name });

      if (existingUser !== null) {
        res.status(422).json({ message: "User name already exists!" });
        db.close();
      } else {
        await db.collection("actors").insertOne({
          name,
          address,
          role,
        });

        res.status(201).json({ message: "User created!" });
        db.close();
      }
    } catch (err) {
      console.log("~ file: signup.ts:45 ~ err:", err);
      res.status(500).json({ message: "User creation error!" });
    }
  }
}
