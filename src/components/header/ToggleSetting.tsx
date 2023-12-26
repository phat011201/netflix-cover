"use client";

import React from "react";

const ToggleSetting = () => {
  return (
    <>
      <div className="shadow-lg">
        <div className="w-48 h-48 rounded-2xl bg-white flex flex-col justify-center items-center gap-6 p-6">
          <div className="w-16 h-16 rounded-full bg-main flex justify-center items-center">
            <span className="text-2xl text-white">N</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Net.World</span>
            <span className="text-gray-400 text-sm">@net.world</span>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-main text-white rounded-2xl py-2 px-4 font-bold">
              Follow
            </button>
            <button className="text-main text-sm font-bold">Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleSetting;
