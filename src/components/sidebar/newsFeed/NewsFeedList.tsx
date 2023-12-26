import React from "react";
import Link from "next/link";

import { NewsFeed } from "@/constants/interface";

import NewSFeedItem from "./NewsFeedItem";

const NewsFeedList = ({ newsFeed }: { newsFeed: Array<NewsFeed> }) => {
  return (
    <nav className="space-y-2">
      <h1 className="text-gray-600 font-semibold text-xs">News Feed</h1>
      {newsFeed.map((item, index) => {
        return (
          <Link
            href={item.url}
            key={index}
            className="flex items-center gap-6 w-full text-left text-lg font-semibold px-4 py-2 rounded-2xl transition  ease-in-out transform hover:bg-red-600 hover:scale-105 active:bg-red-600 active:scale-95"
          >
            <NewSFeedItem icon={item.icon} name={item.name} />
          </Link>
        );
      })}
    </nav>
  );
};

export default NewsFeedList;
