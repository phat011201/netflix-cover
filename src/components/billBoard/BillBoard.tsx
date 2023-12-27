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
  if (error) return <Carousel data={dataMocks} onCardClick={handleCardClick} />;

  const handleWatchClick = () => {
    router.push(`/watch/${carouselData?._id}`);
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

const dataMocks: DataVideos[] = [
  {
    _id: "658a8ffc54e9d709caf8be55",
    title: "Big Buck Bunny",
    description:
      "Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
    genre: "Comedy",
    duration: "10 minutes",
  },
  {
    _id: "658a902247cc03ed6c507594",
    title: "Sintel",
    description:
      "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnailUrl: "http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
    genre: "Adventure",
    duration: "15 minutes",
  },
  {
    _id: "658a903409ff020ae5a47c50",
    title: "Tears of Steel",
    description:
      "In an apocalyptic future, a group of soldiers and scientists takes refuge in Amsterdam to try to stop an army of robots that threatens the planet.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnailUrl:
      "https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
    genre: "Action",
    duration: "12 minutes",
  },
  {
    _id: "658a90a0a6a6b04cc409085b",
    title: "Elephant's Dream",
    description:
      "Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailUrl: "https://download.blender.org/ED/cover.jpg",
    genre: "Sci-Fi",
    duration: "15 minutes",
  },
];
