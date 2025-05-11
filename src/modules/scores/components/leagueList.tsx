import React, { FC } from "react";
import { LeagueListElement } from "./leagueListElem";
import { ILiveLeague } from "../types";
export const LeagueList: FC<{ league: ILiveLeague }> = ({ league }) => {
  return (
    <div className="!my-5">
      <div className="flex items-center !mb-3">
        <img
          className="w-[25px] !mr-2"
          src="https://static.livescore.com/competition/high/premier-league-2024.png"
          alt="league icon"
        />
        <div>
          <h6 className="text-white font-bold">{league.competition.name}</h6>
          <h6 className="text-[13px] text-[#cacaca]">
            {league.matches[0].country?.name}
          </h6>
        </div>
      </div>
      <div>
        {league.matches.map((game) => (
          <LeagueListElement game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};
