"use client";

import React from "react";

import { DataVideos } from "@/constants/api";

import Carousel from "../carousel/Carousel";

import useVideos from "@/hooks/useVideos";

import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCarousel from "@/hooks/useCarousel";

const BillBoard = () => {
  const { data, loading, error } = useVideos();
  const [selectedData, setSelectedData] = React.useState<DataVideos | null>(
    null
  );
  const { data: carouselData } = useCarousel(selectedData || data[0]);

  const handleCardClick = (data: DataVideos) => {
    setSelectedData(data);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <>
      <div className="relative">
        <div>
          <video
            autoPlay
            loop
            muted={true}
            controls={false}
            className={`w-full h-[32rem] object-cover brightness-[60%] transition duration-500`}
            src={carouselData?.videoUrl}
          ></video>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 h-[85%]">
            <div className="h-full flex justify-between">
              <div className="flex flex-col justify-between items-start">
                <button className="px-3 py-2 flex gap-4 items-center bg-main rounded-2xl transition ease-in-out hover:scale-110 active:scale-100">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>Live</span>
                </button>
                <div className="flex flex-col text-start gap-4 max-w-[32rem]">
                  <h1 className="text-4xl font-bold">{carouselData?.title}</h1>
                  <p className="text-xl">{carouselData?.description}</p>
                </div>
                <button className="text-2xl font-semibold px-9 py-5 flex gap-4 items-center bg-main rounded-3xl transition ease-in-out hover:scale-110 active:scale-100">
                  Watch
                </button>
              </div>
              <div className="h-full flex items-end">
                <Carousel data={data} onCardClick={handleCardClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillBoard;
