"use client";

import React from "react";

interface MovieCardProps {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ title, description, image }) => {
  return (
    <>
      <div className="w-1/4 bg-[#1f1f1fbd] rounded flex flex-col gap-4">
        <img
          src={image.url}
          alt={image.alt}
          className="object-cover h-56 w-full rounded-t-md"
        />
        <div className="flex justify-center mb-4">
          <div className="w-10/12 flex flex-col gap-2">
            <div className="text-base font-bold">{title}</div>
            <div className="text-sm font-light">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
