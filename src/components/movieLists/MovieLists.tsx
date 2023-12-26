"use client";

import React from "react";
import MovieCard from "./MovieCard";

interface MovieListsProps {
  title: string;
  imageList: {
    title: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
  }[];
}

const MovieLists: React.FC<MovieListsProps> = ({ title, imageList }) => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4">
        <div className="text-lg font-bold ps-10">{title}</div>
        <div className="w-full flex justify-center">
          <div className="w-11/12 flex gap-4">
            {imageList.slice(0, 4).map((item, index) => (
              <MovieCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieLists;
