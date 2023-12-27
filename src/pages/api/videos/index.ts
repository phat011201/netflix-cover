// videos.js

import { NextApiRequest, NextApiResponse } from "next";

import { getVideos } from "@lib/mongo/videos";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const { videos, error } = await getVideos();
        if (error) throw new Error(error);
        return res.status(200).json({ videos });
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
      break;
  }
  res.setHeader("Allow", ["GET"]);
  return res.status(425).end(`Method Not Allowed`);
}
