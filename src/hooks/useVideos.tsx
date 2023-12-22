"use client";

import React from "react";
import axios from "axios";

import { API_URL, DataVideos, Videos } from "@/constants/api";

const useVideos = (id?: string): Videos => {
  const [data, setData] = React.useState<DataVideos[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}/videos${id ? `/${id}` : ""}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { data, loading, error };
};

export default useVideos;
