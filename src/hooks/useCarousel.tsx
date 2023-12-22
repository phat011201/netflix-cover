"use client";

import React from "react";

import { DataVideos } from "@/constants/api";

const useCarousel = (dataVideos?: DataVideos) => {
  const [data, setData] = React.useState<DataVideos>();

  React.useEffect(() => {
    setData(dataVideos);
  }, [dataVideos]);

  return { data };
};

export default useCarousel;
