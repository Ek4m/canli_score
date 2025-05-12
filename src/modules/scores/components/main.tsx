"use client";
import React, { useState } from "react";
import { DatePicker } from "./datePicker";
// import { LeagueList } from "./leagueList";

export const ScoreMain = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <div className="lg:col-span-3 col-span-6 rounded-lg border-1 border-[#414141] p-3">
      <DatePicker date={date} onChangeDate={setDate} />
      {/* <LeagueList />
      <LeagueList /> */}
    </div>
  );
};
