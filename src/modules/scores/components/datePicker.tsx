import React, { FC, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { differenceInMilliseconds, format } from "date-fns";

import { DayPicker } from "./dayPicker";

export const DatePicker: FC<{
  date: Date;
  onChangeDate(val: Date): void;
  disablePicking: boolean;
}> = ({ date, onChangeDate, disablePicking }) => {
  const today = useRef(new Date());

  const onSelectNextDay = useCallback(() => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    onChangeDate(newDate);
  }, [date, onChangeDate]);

  const onSelectPrevDay = useCallback(() => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    onChangeDate(newDate);
  }, [date, onChangeDate]);

  const selectedDateTitle = useMemo(() => {
    const differenceInMillis = differenceInMilliseconds(date, today.current);
    const difference = Math.ceil(differenceInMillis / (1000 * 60 * 60 * 24));
    if (difference === 0) return "Today";
    if (difference === 1) return "Tomorrow";
    if (difference === -1) return "Yesterday";
    return format(date, "d MMM, yyyy");
  }, [date]);

  return (
    <div className="flex items-center border-b-1 border-[#a4b0be] pb-3">
      <Link href="/scores/live">
        <button className="w-[40px] h-[40px] rounded-full cursor-pointer border-[#57606f] border-1 text-[#57606f] flex items-center text-xs justify-center !mr-2 hover:bg-[#57606f] hover:text-white">
          LIVE
        </button>
      </Link>
      <div className="flex flex-1 justify-between items-center">
        <button
          disabled={disablePicking}
          onClick={onSelectPrevDay}
          className=" hover:bg-[#ced6e0] rounded-[50%] cursor-pointer p-2"
        >
          <MdOutlineKeyboardArrowLeft size={25} color="#57606f" />
        </button>
        <h1 className="text-[#57606f] font-bold">{selectedDateTitle}</h1>
        <button
          disabled={disablePicking}
          onClick={onSelectNextDay}
          className=" hover:bg-[#ced6e0] rounded-[50%] cursor-pointer p-2"
        >
          <MdOutlineKeyboardArrowRight size={25} color="#57606f" />
        </button>
      </div>

      <DayPicker onSelect={onChangeDate} value={date}>
        <button
          disabled={disablePicking}
          className="!ml-3 h-[40px] w-[40px] bg-[#ffff] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#ced6e0] border-[#57606f] border-1"
        >
          <BsCalendar2Date size={20} color="#2f3542" />
        </button>
      </DayPicker>
    </div>
  );
};
