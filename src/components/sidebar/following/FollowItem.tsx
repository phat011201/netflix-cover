"use client";

import React from "react";

import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IFollowing {
  src: string;
  name: string;
  status: boolean;
}

const FollowItem: React.FC<IFollowing> = ({ src, name, status }) => {
  return (
    <>
      <div className="flex items-center justify-between transition ease-in-out overflow-visible transform hover:scale-95 cursor-default">
        <div className="flex items-center gap-4">
          <img src={src} className={`w-8 h-8 rounded-full object-cover`} />
          <span className="text-gray-500 font-semibold">{name}</span>
        </div>
        {status === false ? (
          <div className={`w-3 h-3 rounded-full bg-gray-500`}></div>
        ) : (
          <FontAwesomeIcon
            icon={faWifi}
            beatFade
            className="w-3 h-3 delay-1000 text-green-500"
          />
        )}
      </div>
    </>
  );
};

export default FollowItem;
