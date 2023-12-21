"use client";

import React from "react";

import NewsFeedList from "./newsFeed/NewsFeedList";
import FollowLists from "./following/FollowLists";

const Sidebar = () => {
  return (
    <>
      <aside className="w-64 h-screen p-5 text-white flex flex-col gap-6 border-r-2 border-[rgba(82,82,91,0.2)] font-sans">
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-red-600 w-10 h-10 flex items-center justify-center text-2xl">
            N
          </div>
          <span className="font-bold">
            Adze.<span className="text-red-600">DESIGN</span>
          </span>
        </div>
        <NewsFeedList />
        <hr className="border border-[rgba(82,82,91,0.2)]" />
        <FollowLists />
        <hr className="border border-[rgba(82,82,91,0.2)]" />
        <div className="flex justify-center items-center text-gray-600 font-bold">
          <span>
            Net<span className="text-gray-700">world</span>
          </span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
