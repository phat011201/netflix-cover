"use client";

import {
  IconDefinition,
  faCirclePlay,
  faCompass,
  faRectangleList,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

interface NewsFeed {
  name: string;
  icon: IconDefinition;
}

export const NEWS_FEED: Array<NewsFeed> = [
  {
    name: "Browse",
    icon: faCompass,
  },
  {
    name: "Trending",
    icon: faArrowTrendUp,
  },
  {
    name: "Following",
    icon: faUser,
  },
  {
    name: "Your Videos",
    icon: faCirclePlay,
  },
  {
    name: "Playlist",
    icon: faRectangleList,
  },
];
