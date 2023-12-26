"use client";

import React from "react";

import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatusLive = ({ status }: { status: boolean | undefined }) => {
  return (
    <>
      {status && (
        <button className="px-3 py-2 flex gap-4 items-center bg-main rounded-2xl transition ease-in-out hover:scale-110 active:scale-100">
          <FontAwesomeIcon icon={faWifi} />
          <span>Live</span>
        </button>
      )}
    </>
  );
};

export default StatusLive;
