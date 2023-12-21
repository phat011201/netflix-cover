"use client";

import React from "react";

import FollowItem from "./FollowItem";

import { FOLLOW_LISTS } from "@/constants/follow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FollowLists = () => {
  const [isLimitFollowItem, setIsLimitFollowItem] = React.useState(5);
  const [isAnimationButton, setIsAnimationButton] = React.useState(true);

  const handleMoreFollowItem = () => {
    setIsLimitFollowItem(isLimitFollowItem + 2);
  };

  const handleAnimationButton = () => {
    setIsAnimationButton(false);
  };

  const handleAnimationButtonOut = () => {
    setIsAnimationButton(true);
  };

  return (
    <>
      <div className="flex flex-col gap-4 overflow-auto no-scrollbar mb-8">
        <h3 className="text-gray-600 font-semibold text-xs">Following</h3>
        {FOLLOW_LISTS.slice(0, isLimitFollowItem).map((item, index) => {
          return (
            <FollowItem
              key={index}
              src={item.src}
              name={item.name}
              status={item.status}
            />
          );
        })}
        <div
          className={`flex gap-4 items-center mt-6`}
          onMouseEnter={handleAnimationButton}
          onMouseLeave={handleAnimationButtonOut}
        >
          <button
            className={`w-10 h-10 bg-red-600 rounded-full transition duration-500 ease-in-out ${
              isAnimationButton ? "translate-x-0" : "translate-x-[225%]"
            }`}
            onClick={handleMoreFollowItem}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <span
            className={`text-gray-600 font-semibold text-sm transition duration-1000 ease-in-out ${
              isAnimationButton ? "visible" : "invisible"
            }`}
          >
            Load more
          </span>
        </div>
      </div>
    </>
  );
};

export default FollowLists;
