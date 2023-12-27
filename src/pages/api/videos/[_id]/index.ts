import { NextApiRequest, NextApiResponse } from "next";
import { getVideo } from "@lib/mongo/videos";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id } = req.query;
  try {
    const { video, error } = await getVideo(_id);
    if (error) throw new Error(error);
    return res.status(200).json({ video });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
