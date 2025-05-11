import React from "react";
import { DatePicker } from "./datePicker";
// import { LeagueList } from "./leagueList";

export const ScoreMain = () => {
  return (
    <div className="lg:col-span-3 col-span-6 rounded-lg border-1 border-[#414141] p-3">
      <DatePicker />
      {/* <LeagueList />
      <LeagueList /> */}
    </div>
  );
};
