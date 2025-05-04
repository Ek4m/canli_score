import React from "react";
import { IoIosSearch } from "react-icons/io";

export const AsideSearch = () => {
  return (
    <div className="border-b-1 pl-1 border-[#414141] flex items-center">
      <IoIosSearch size={30} color="#414141"/>
      <input className="w-[calc(100%-2rem)] placeholder-[#7c7c7c] text-white p-3 focus:outline-none text-sm" placeholder="Search..." />
    </div>
  );
};
