"use client";

import {
  faBell,
  faChevronLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full py-5 px-16 flex justify-between items-center">
        <button>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`p-5 rounded-2xl border-2 border-[rgba(82,82,91,0.2)]`}
          />
        </button>
        <div className="flex gap-12 items-center">
          <div className="flex items-center px-5 py-3 gap-4 rounded-3xl border-2 border-[rgba(82,82,91,0.2)]">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search everthing"
              className="outline-none bg-transparent"
            />
          </div>
          <button className="relative after:bg-red-600 after:content-'' after:absolute after:w-2 after:h-2 after:rounded-full after:top-0 after:right-0 after:animate-ping">
            <FontAwesomeIcon icon={faBell} className="text-2xl" />
          </button>

          <div className="w-12 h-12 rounded-full">
            <img
              src="https://i.pinimg.com/564x/92/f7/cc/92f7cc138902b456866f7c4bd65dc0f4.jpg"
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
