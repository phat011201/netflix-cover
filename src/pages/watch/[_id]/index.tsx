import React from "react";

// taildwindcss
import "tailwindcss/tailwind.css";

import MovieBox from "@/components/movie/MovieBox";

const Watch = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <MovieBox />
      </div>
    </>
  );
};

export default Watch;
