import clientPromise from "@lib/mongo/mongodb";
import { ObjectId } from "mongodb";

let client;
let db;
let videos;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("film-01");
    videos = db.collection("videos");
  } catch (error) {
    throw new Error(error);
  }
}

(async function () {
  await init();
})();

export async function getVideos() {
  try {
    if (!videos) await init();
    const result = await videos
      .find({})
      .map((doc) => ({ ...doc }))
      .toArray();
    return { videos: result };
  } catch (error) {
    return { error: "Error fetching videos" };
  }
}

export async function getVideo(id) {
  try {
    if (!videos) await init();
    const result = await videos.findOne({ _id: new ObjectId(id) });
    return { video: result };
  } catch (error) {
    return { error: "Error fetching video" };
  }
}

export async function createVideo({ video }) {
  try {
    if (!videos) await init();
    const result = await videos.insertOne(video);
    return { video: result.ops[0] };
  } catch (error) {
    return { error: "Error creating video" };
  }
}
