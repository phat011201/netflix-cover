"use client";

import React from "react";
import { useParams } from "next/navigation";
import useMovie from "@/hooks/useMovie";

const Movie = () => {
  const videoId = useParams()._id;
  const { data: videos } = useMovie(videoId);

  return (
    <>
      <video
        autoPlay
        muted={true}
        src={videos.videoUrl}
        className={`w-full h-full absolute top-0 left-0 object-contain z-10`}
        controls={false}
      ></video>
    </>
  );
};

export default Movie;
