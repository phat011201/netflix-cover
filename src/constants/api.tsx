"use client";

const API_URL = "https://cg-netflix-back-end.onrender.com/api/v1";

interface DataVideos {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

interface Videos {
  data: DataVideos[];
  loading: boolean;
  error: any;
}

export { API_URL };
export type { DataVideos, Videos };
