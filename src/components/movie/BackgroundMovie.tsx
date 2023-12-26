"use client";

import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import React from "react";

interface BackgroundMovieProps {
  onMovieClick: () => void;
  mouseMoving: boolean;
}

const BackgroundMovie: React.FC<BackgroundMovieProps> = ({
  onMovieClick,
  mouseMoving,
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div
        className={`w-full h-full relative overflow-hidden ${
          mouseMoving ? "z-20" : "z-0"
        }`}
        onClick={onMovieClick}
        onContextMenu={(e) => e.preventDefault()}
      >
        <FontAwesomeIcon
          onClick={handleBack}
          icon={faChevronLeft}
          className="w-10 h-10 text-8xl cursor-pointer absolute top-10 left-10"
        />
      </div>
    </>
  );
};

export default BackgroundMovie;
