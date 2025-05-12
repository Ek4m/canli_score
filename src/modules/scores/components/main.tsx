"use client";
import React, { useState } from "react";
import { DatePicker } from "./datePicker";
import { useGetLeagueMatchesByDate } from "../hooks";
import { LeagueList } from "./leagueList";

export const ScoreMain = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { data } = useGetLeagueMatchesByDate(date);
  return (
    <div className="lg:col-span-3 col-span-6 rounded-lg border-1 border-[#414141] p-3">
      <DatePicker date={date} onChangeDate={setDate} />
      {data?.map((league) => (
        <LeagueList key={league.competition.id} league={league} />
      ))}
    </div>
  );
};
