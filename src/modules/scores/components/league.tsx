import React, { FC } from "react";
import { ILeague } from "../types";

export const LeagueBadge: FC<{ league: ILeague; countryName?: string }> = ({
  league,
  countryName = "",
}) => {
  return (
    <div className="flex items-center !mb-3">
      <img
        className="w-[25px] !mr-2"
        src="https://static.livescore.com/competition/high/premier-league-2024.png"
        alt="league icon"
      />
      <div>
        <h6 className="text-white font-bold">{league.name}</h6>
        <h6 className="text-[13px] text-[#cacaca]">{countryName}</h6>
      </div>
    </div>
  );
};
