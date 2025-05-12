import React, { FC, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { differenceInDays, format } from "date-fns";

import { DayPicker } from "./dayPicker";

export const DatePicker: FC<{
  date: Date;
  onChangeDate(val: Date): void;
  disablePicking: boolean;
}> = ({ date, onChangeDate, disablePicking }) => {
  const today = useRef(new Date());

  const onSelectNextDay = useCallback(() => {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + 1);
    onChangeDate(newDate);
  }, [date, onChangeDate]);

  const onSelectPrevDay = useCallback(() => {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() - 1);
    onChangeDate(newDate);
  }, [date, onChangeDate]);

  const selectedDateTitle = useMemo(() => {
    const difference = differenceInDays(date, today.current);
    if (difference === 0) return "Today";
    if (difference === 1) return "Tomorrow";
    if (difference === -1) return "Yesterday";
    return format(date, "d MMM, yyyy");
  }, [date]);

  return (
    <div className="flex items-center">
      <Link href="/scores/live">
        <button className="w-[45px] h-[45px] rounded-full cursor-pointer bg-[white] flex items-center justify-center !mr-2">
          LIVE
        </button>
      </Link>
      <div className="flex flex-1 justify-between items-center">
        <button
          disabled={disablePicking}
          onClick={onSelectPrevDay}
          className=" hover:bg-[#414141] rounded-[50%] cursor-pointer p-2"
        >
          <MdOutlineKeyboardArrowLeft size={25} color="white" />
        </button>
        <h1 className="text-white font-bold">{selectedDateTitle}</h1>
        <button
          disabled={disablePicking}
          onClick={onSelectNextDay}
          className=" hover:bg-[#414141] rounded-[50%] cursor-pointer p-2"
        >
          <MdOutlineKeyboardArrowRight size={25} color="white" />
        </button>
      </div>

      <DayPicker onSelect={onChangeDate} value={date}>
        <button
          disabled={disablePicking}
          className="!ml-3 h-[40px] w-[40px] bg-[#181818] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#414141]"
        >
          <BsCalendar2Date size={20} color="white" />
        </button>
      </DayPicker>
    </div>
  );
};
