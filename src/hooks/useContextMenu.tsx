"use client";

import React, { useEffect } from "react";

const useContextMenu = (elementRef: React.RefObject<any>) => {
  useEffect(() => {
    const blockRightClick = (event: React.MouseEvent) => {
      event.preventDefault();
    };

    const element = elementRef.current;

    if (element) {
      element.addEventListener("contextmenu", blockRightClick);

      return () => {
        element.removeEventListener("contextmenu", blockRightClick);
      };
    }
  }, [elementRef]);
};

export default useContextMenu;
