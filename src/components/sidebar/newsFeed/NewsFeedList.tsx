"use client";

import React from "react";

import NewSFeedItem from "./NewsFeedItem";

import { NEWS_FEED } from "@/constants/newsFeed";

const NewsFeedList = () => {
  return (
    <nav className="space-y-2">
      <h1 className="text-gray-600 font-semibold text-xs">News Feed</h1>
      {NEWS_FEED.map((item, index) => {
        return (
          <button
            key={index}
            className="flex items-center gap-6 w-full text-left text-lg font-semibold px-4 py-2 rounded-2xl transition  ease-in-out transform hover:bg-red-600 hover:scale-105 active:bg-red-600 active:scale-95"
          >
            <NewSFeedItem icon={item.icon} name={item.name} />
          </button>
        );
      })}
    </nav>
  );
};

export default NewsFeedList;
