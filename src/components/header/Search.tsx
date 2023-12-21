"use client";

import React from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex items-center px-5 py-3 gap-4 rounded-3xl border-2 border-[rgba(82,82,91,0.2)]">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          name=""
          id=""
          onChange={handleSearch}
          placeholder="Search everthing"
          className="outline-none bg-transparent"
        />
      </div>
    </>
  );
};

export default Search;
