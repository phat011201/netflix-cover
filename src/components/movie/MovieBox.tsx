"use client";

import React from "react";

import BackgroundMovie from "@/components/movie/BackgroundMovie";
import Movie from "@/components/movie/Movie";

import useHover from "@/hooks/useHover";

const MovieBox = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const { mouseMoving } = useHover(10000);

  const handleVideoClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  React.useEffect(() => {
    const video = document.querySelector("video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  });

  return (
    <>
      <BackgroundMovie
        onMovieClick={handleVideoClick}
        mouseMoving={mouseMoving}
      />
      <Movie />
    </>
  );
};

export default MovieBox;
