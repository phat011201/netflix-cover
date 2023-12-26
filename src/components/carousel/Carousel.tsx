"use client";

import React from "react";

import { DataVideos } from "@/constants/interface";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselCard from "./CarouselCard";

interface Carousel extends React.HTMLAttributes<DataVideos> {
  data: Array<DataVideos>;
  onCardClick: (data: DataVideos) => void;
}

const Carousel: React.FC<Carousel> = ({ data, onCardClick }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const handlePrevClick = () => {};

  const handleNextClick = () => {};
  return (
    <>
      <div className="flex items-center relative">
        <button
          onClick={handlePrevClick}
          className="w-8 h-8 bg-main rounded-full absolute -start-4 transition ease-in-out hover:scale-105 active:scale-95 z-40"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="flex gap-10 overflow-hidden">
          {data.slice(0, 4).map((image, index) => (
            <CarouselCard key={index} data={image} onClick={onCardClick} />
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="w-8 h-8 bg-main rounded-full absolute -end-4 transition ease-in-out hover:scale-105 active:scale-95 z-40"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};

export default Carousel;
