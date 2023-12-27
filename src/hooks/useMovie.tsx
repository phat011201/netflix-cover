"use client";

import React from "react";
import axios from "axios";

import { API_URL } from "@/constants/api";
import { DataVideos } from "@/constants/interface";

const useMovie = (id: string | string[]) => {
  const [data, setData] = React.useState<DataVideos>({} as DataVideos);
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<any>(null);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/videos/${id}`);
        setData(response.data.videos);
      } catch (error) {
        setError(error as boolean);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  return { data, error, loading };
};

export default useMovie;
