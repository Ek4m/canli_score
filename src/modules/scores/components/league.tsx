import React, { FC } from "react";
import { ILeague } from "../types";
import Link from "next/link";

export const LeagueBadge: FC<{ league: ILeague; countryName?: string }> = ({
  league,
  countryName = "",
}) => {
  return (
    <Link href={`/scores/leagues/${league.id}`}>
      <div className="flex items-center !mb-3">
        <img
          className="w-[30px] !mr-2   bg-[#2f3542] p-1 rounded-sm"
          src="https://static.livescore.com/competition/high/premier-league-2024.png"
          alt="league icon"
        />
        <div>
          <h6 className="text-[#57606f] font-bold">{league.name}</h6>
          <h6 className="text-[13px] text-[#a4b0be]">{countryName}</h6>
        </div>
      </div>
    </Link>
  );
};
