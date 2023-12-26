"use client";

import React from "react";

import { DataVideos } from "@/constants/interface";

interface CarouselCardProps {
  data: DataVideos;
  onClick: (data: DataVideos) => void;
}

const CarouselCard = ({ data, onClick }: CarouselCardProps) => {
  const handleClick = () => {
    onClick(data);
  };

  return (
    <>
      <button
        className="max-w-34 max-h-20 transition ease-in-out hover:scale-95 active:scale-90"
        onClick={handleClick}
      >
        <img
          src={data.thumbnailUrl}
          alt={data.title}
          width={150}
          height={80}
          className="w-34 h-20 object-cover rounded-xl"
        />
      </button>
    </>
  );
};

export default CarouselCard;
