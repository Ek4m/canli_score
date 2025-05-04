import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";

export const DatePicker = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 justify-between items-center">
        <button className=" hover:bg-[#414141] rounded-[50%] cursor-pointer p-2">
          <MdOutlineKeyboardArrowLeft size={25} color="white" />
        </button>
        <h1 className="text-white font-bold">Today</h1>
        <button className=" hover:bg-[#414141] rounded-[50%] cursor-pointer p-2">
          <MdOutlineKeyboardArrowRight size={25} color="white" />
        </button>
      </div>
      <button className="!ml-3 h-[40px] w-[40px] bg-[#181818] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#414141]">
        <BsCalendar2Date size={20} color="white" />
      </button>
    </div>
  );
};
