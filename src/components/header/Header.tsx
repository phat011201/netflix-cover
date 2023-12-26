"use client";

import React from "react";

import Search from "./Search";
import ToggleSetting from "./ToggleSetting";

import { faBell, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const [isOpenSetting, setIsOpenSetting] = React.useState(false);

  const handleOpenSetting = () => {
    setIsOpenSetting((prev) => !prev);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <header className="w-11/12 py-5 flex justify-between items-center z-10">
        <button>
          <FontAwesomeIcon
            onClick={handleBack}
            icon={faChevronLeft}
            className={`p-5 rounded-2xl border-2 border-[rgba(82,82,91,0.2)]`}
          />
        </button>
        <div className="flex gap-12 items-center">
          <Search setSearch={setSearch} />
          <button className="relative after:bg-main after:content-'' after:absolute after:w-2 after:h-2 after:rounded-full after:top-0 after:right-0 after:animate-ping">
            <FontAwesomeIcon icon={faBell} className="text-2xl" />
          </button>

          <div
            onClick={handleOpenSetting}
            className="w-12 h-12 rounded-full cursor-pointer relative"
          >
            <img
              src="https://i.pinimg.com/564x/92/f7/cc/92f7cc138902b456866f7c4bd65dc0f4.jpg"
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
            <div
              className={`relative -translate-x-16 transition ease-in-out duration-500 ${
                isOpenSetting
                  ? "visible translate-y-0 scale-100"
                  : "invisible translate-y-[0] scale-0"
              }`}
            >
              <ToggleSetting />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
