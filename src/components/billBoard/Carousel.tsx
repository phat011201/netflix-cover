"use client";

import React from "react";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Images {
  images: {
    src: string;
    alt: string;
  }[];
}

const SlideBar: React.FC<Images> = ({ images }) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const imagesInView = 4;

  const goToPreviousImages = () => {
    const newIndex =
      (startIndex - imagesInView + images.length) % images.length;
    setStartIndex(newIndex);
  };

  const goToNextImages = () => {
    const newIndex = (startIndex + imagesInView) % images.length;
    setStartIndex(newIndex);
  };

  return (
    <>
      <div className="flex items-center relative">
        <button
          className="w-8 h-8 bg-red-600 rounded-full absolute -start-4 transition ease-in-out hover:scale-105 active:scale-95"
          onClick={goToPreviousImages}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="flex gap-10 overflow-hidden">
          {[...images, ...images, ...images]
            .slice(startIndex, startIndex + imagesInView)
            .map((image, index) => (
              <img
                src={image.src}
                alt={image.alt}
                key={index}
                className="w-34 h-20 object-cover rounded-2xl"
              />
            ))}
        </div>
        <button
          className="w-8 h-8 bg-red-600 rounded-full absolute -end-4 transition ease-in-out hover:scale-105 active:scale-95"
          onClick={goToNextImages}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};

export default SlideBar;
