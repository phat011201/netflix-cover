import clientPromise from "@lib/mongo/mongodb";

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
      .map((doc) => ({ id: doc._id, ...doc }))
      .toArray();
    return { videos: result };
  } catch (error) {
    return { error: "Error fetching videos" };
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