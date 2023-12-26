"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { DataVideos } from "@/constants/interface";

import Carousel from "@/components/carousel/Carousel";
import Loading from "@/components/notification/Loading";
import StatusLive from "@/components/billBoard/StatusLive";

import useVideos from "@/hooks/useVideos";
import useCarousel from "@/hooks/useCarousel";

const BillBoard = () => {
  const router = useRouter();
  const { data, loading, error } = useVideos();
  const [selectedData, setSelectedData] = React.useState<DataVideos | null>(
    null
  );
  const { data: carouselData } = useCarousel(selectedData || data[0]);

  const handleCardClick = (data: DataVideos) => {
    setSelectedData(data);
  };

  if (loading) return <Loading />;

  if (error) return <p>Error</p>;

  const handleWatchClick = () => {
    router.push(`/watch/${carouselData?.id}`);
  };

  return (
    <>
      <div className="relative">
        <div>
          <video
            autoPlay
            loop
            muted
            controls={false}
            className={`w-full h-[32rem] object-cover brightness-[60%] transition duration-500 z-0`}
            poster={carouselData?.thumbnailUrl}
            src={carouselData?.videoUrl}
            onContextMenu={(e) => e.preventDefault()}
          ></video>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="w-11/12 h-[85%]">
              <div className="h-full flex justify-between">
                <div
                  className={`flex flex-col items-start ${
                    carouselData?.status
                      ? "justify-between"
                      : "justify-end gap-16"
                  }`}
                >
                  <StatusLive status={carouselData?.status} />
                  <div className="flex flex-col text-start gap-4 max-w-[32rem]">
                    <h1 className="text-4xl font-bold">
                      {carouselData?.title}
                    </h1>
                    <p className="text-xl">{carouselData?.description}</p>
                  </div>
                  <button
                    onClick={handleWatchClick}
                    className="text-2xl font-semibold px-9 py-5 flex gap-4 items-center bg-main rounded-3xl transition ease-in-out hover:scale-110 active:scale-100"
                  >
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
      </div>
    </>
  );
};

export default BillBoard;
