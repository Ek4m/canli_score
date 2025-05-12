"use client";
import React, { useState } from "react";

import { DatePicker } from "./datePicker";
import { useGetLeagueMatchesByDate } from "../hooks";
import { LeagueList } from "./leagueList";
import { AppSpinner } from "@/common/components";
import { MobileSearch } from "./mobileSearch";

export const ScoreMain = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { data, isFetching } = useGetLeagueMatchesByDate(date);
  return (
    <div className="lg:col-span-3 col-span-6 ">
      <MobileSearch />
      <div className="rounded-lg border-1 border-[#414141] p-3 h-[100vh] overflow-y-scroll">
        <DatePicker
          disablePicking={isFetching}
          date={date}
          onChangeDate={setDate}
        />
        {isFetching ? (
          <div className="w-full min-h-[50vh] flex items-center justify-center">
            <AppSpinner />
          </div>
        ) : (
          data?.map((league) => (
            <LeagueList key={league.competition.id} league={league} />
          ))
        )}
      </div>
    </div>
  );
};
