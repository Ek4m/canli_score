import React from "react";
import { LeagueListElement } from "./leagueListElem";
export const LeagueList = () => {
  return (
    <div className="!mb-5">
      <div className="flex items-center !mb-3">
        <img
          className="w-[25px] !mr-2"
          src="https://static.livescore.com/competition/high/premier-league-2024.png"
          alt="league icon"
        />
        <div>
          <h6 className="text-white font-bold">Premier League</h6>
          <h6 className="text-[13px] text-[#cacaca]">England</h6>
        </div>
      </div>
      <div>
        {[1, 2, 3, 4, 5].map((game) => (
          <LeagueListElement key={game} />
        ))}
      </div>
    </div>
  );
};
