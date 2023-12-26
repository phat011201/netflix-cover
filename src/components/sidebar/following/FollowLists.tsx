import React from "react";

import { IFollowing } from "@/constants/interface";

import FollowItem from "./FollowItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FollowLists = ({ followLists }: { followLists: Array<IFollowing> }) => {
  const [isLimitFollowItem, setIsLimitFollowItem] = React.useState(5);
  const [isAnimationButton, setIsAnimationButton] = React.useState(true);

  const handleMoreFollowItem = () => {
    setIsLimitFollowItem(isLimitFollowItem + 4);
  };

  const handleUnMoreFollowItem = () => {
    setIsLimitFollowItem(isLimitFollowItem - 4);
  };

  const handleAnimationButton = () => {
    setIsAnimationButton(false);
  };

  const handleAnimationButtonOut = () => {
    setIsAnimationButton(true);
  };

  return (
    <>
      <div className="mb-12">
        <div className="flex flex-col gap-4 overflow-auto no-scrollbar">
          <h3 className="text-gray-600 font-semibold text-xs">Following</h3>
          {followLists.slice(0, isLimitFollowItem).map((item, index) => {
            return (
              <FollowItem
                key={index}
                src={item.src}
                name={item.name}
                status={item.status}
              />
            );
          })}
        </div>
        <div
          className={`w-full flex gap-4 items-center mt-6`}
          onMouseEnter={handleAnimationButton}
          onMouseLeave={handleAnimationButtonOut}
        >
          <button
            className={`w-10 h-10 rounded-full transition duration-500 ease-in-out ${
              isAnimationButton
                ? "translate-x-0"
                : "translate-x-8 w-full bg-main"
            }`}
            onClick={
              isLimitFollowItem < 9
                ? handleMoreFollowItem
                : handleUnMoreFollowItem
            }
          >
            {isLimitFollowItem < 9 ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </button>
          <span
            className={`text-gray-600 font-semibold text-sm transition duration-1000 ease-in-out ${
              isAnimationButton ? "visible" : "invisible"
            }`}
          >
            {isLimitFollowItem < 9 ? <>show more</> : <>show less</>}
          </span>
        </div>
      </div>
    </>
  );
};

export default FollowLists;
