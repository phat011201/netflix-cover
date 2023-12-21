"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface NewsFeedProps {
  icon: IconProp;
  name: string;
}

const NewSFeedItem: React.FC<NewsFeedProps> = ({ icon, name }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} />
      <span className="">{name}</span>
    </>
  );
};

export default NewSFeedItem;
