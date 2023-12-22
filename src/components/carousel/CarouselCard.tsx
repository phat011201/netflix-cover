"use client";

import React from "react";

import { DataVideos } from "@/constants/api";

interface CarouselCardProps{
  data: DataVideos;
  onClick: (data:DataVideos) => void;
}

const CarouselCard = ({ data, onClick }: CarouselCardProps) => {
  const handleClick = () => {
    onClick(data);
  }

  return (
    <>
      <button
        className="transition ease-in-out hover:scale-95 active:scale-90 z-0"
        onClick={handleClick}
      >
        <img
          src={data.thumbnailUrl}
          alt={data.title}
          className="w-34 h-20 object-cover rounded-2xl"
        />
      </button>
    </>
  );
};

export default CarouselCard;
