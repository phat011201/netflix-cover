"use client";

import React from "react";

const useHover = (time?: number) => {
  const [mouseMoving, setMouseMoving] = React.useState(false);
  React.useEffect(() => {
    const handleMouseMove = () => {
      setMouseMoving(true);
      time && setTimeout(() => setMouseMoving(false), time);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return { mouseMoving };
};

export default useHover;
