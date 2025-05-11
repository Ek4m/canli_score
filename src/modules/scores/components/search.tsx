"use client";
import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { ScoresContext } from "../contexts";

export const AsideSearch = () => {
  const { search, setSearch } = useContext(ScoresContext);
  return (
    <div className="border-b-1 pl-1 border-[#414141] flex items-center">
      <IoIosSearch size={25} color="#414141" />
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-[calc(100%-20px)] placeholder-[#7c7c7c] text-white p-3 focus:outline-none text-sm"
        placeholder="Search..."
      />
    </div>
  );
};
