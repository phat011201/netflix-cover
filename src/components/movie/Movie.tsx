"use client";

import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";

const Movie = () => {
  const router = useRouter();
  const videoId = router.query._id as string | string[];
  const { data: video } = useMovie(videoId);

  return (
    <>
      <video
        autoPlay
        muted={true}
        src={
          video?.videoUrl ||
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
        className={`w-full h-full absolute object-cover z-10`}
        controls={false}
      ></video>
    </>
  );
};

export default Movie;
