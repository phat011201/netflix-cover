import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface DataVideos {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
  status?: boolean;
}

interface DataUsers {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
  status: boolean;
}

interface Videos {
  data: DataVideos[];
  loading: boolean;
  error: any;
}

interface NewsFeed {
  name: string;
  icon: IconDefinition;
  url: string;
}

interface IFollowing {
  src: string;
  name: string;
  status: boolean;
}

export type { DataVideos, Videos, NewsFeed, IFollowing, DataUsers };
