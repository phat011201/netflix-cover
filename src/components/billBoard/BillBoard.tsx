import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Carousel from "./Carousel";

const BillBoard = () => {
  return (
    <>
      <div className="relative">
        <div>
          <video
            src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
            autoPlay
            loop
            controls={false}
            className={`w-full h-[32rem] object-cover brightness-[60%] transition duration-500`}
          ></video>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%]">
            <div className="h-full flex justify-between">
              <div className="flex flex-col justify-between items-start">
                <button className="px-3 py-2 flex gap-4 items-center bg-red-600 rounded-2xl transition ease-in-out hover:scale-110 active:scale-100">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>Live</span>
                </button>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold">Big Buck Bunny</h1>
                  <p className="text-2xl">Short Film</p>
                </div>
                <button className="text-2xl font-semibold px-9 py-5 flex gap-4 items-center bg-red-600 rounded-3xl transition ease-in-out hover:scale-110 active:scale-100">
                  Watch
                </button>
              </div>
              <div className="h-full flex items-end">
                <Carousel images={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillBoard;

const images = [
  {
    src: "https://i.pinimg.com/736x/69/6e/9d/696e9dfa1a3936bcbbe12ff28144939d.jpg",
    alt: "image-1",
  },
  {
    src: "https://i.pinimg.com/564x/71/af/df/71afdf0204b2a3f2fb6758b15b08053c.jpg",
    alt: "image-2",
  },
  {
    src: "https://i.pinimg.com/564x/62/d0/d2/62d0d22970e35adcd7810dbda99d8d04.jpg",
    alt: "image-3",
  },
  {
    src: "https://i.pinimg.com/736x/f7/a8/9d/f7a89ddb7fc4dfe1dd704f0c51a5b0f5.jpg",
    alt: "image-4",
  },
  {
    src: "https://i.pinimg.com/564x/c4/0e/68/c40e681e0c69a5e9c06ff7100ceb0c35.jpg",
    alt: "image-5",
  },
];
