"use client";

import React from "react";

import NewsFeedList from "./newsFeed/NewsFeedList";
import FollowLists from "./following/FollowLists";

import { NEWS_FEED } from "@/constants/newsFeed";
import { FOLLOW_LISTS } from "@/constants/follow";

const Sidebar = () => {
  return (
    <>
      <aside className="w-1/6 h-full p-5 flex flex-col gap-6 justify-start border-r-2 border-[rgba(82,82,91,0.2)] font-sans fixed top-0 left-0">
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-main w-10 h-10 flex items-center justify-center text-2xl">
            N
          </div>
          <span className="font-bold">
            Net.<span className="text-main">WORLD</span>
          </span>
        </div>
        {NEWS_FEED && <NewsFeedList newsFeed={NEWS_FEED} />}
        <hr className="border border-[rgba(82,82,91,0.2)]" />
        {FOLLOW_LISTS && <FollowLists followLists={FOLLOW_LISTS} />}
        <div className="w-full flex flex-col items-center absolute bottom-0 left-0">
          <div className="w-[80%] flex flex-col gap-4">
            <hr className="border border-[rgba(82,82,91,0.2)]" />
            <div className="flex justify-center items-center text-gray-600 font-bold">
              <span>
                Net<span className="text-gray-700">world</span>
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
