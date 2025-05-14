"use client";
import React, { useContext } from "react";
import Link from "next/link";

import { ScoresContext } from "../contexts";

export const LeaguesListByCountry = () => {
  const { countryId, leaguesByCountry } = useContext(ScoresContext);

  return (
    <div className="h-[100vh] overflow-y-scroll">
      {leaguesByCountry?.map((league) => (
        <Link key={league.id} href={`/scores/leagues/${league.id}`}>
          <div
            role="button"
            className={`px-2 py-2 cursor-pointer  overflow-scroll hover:bg-[#a4b0be]  flex items-center ${
              countryId === league.id ? "bg-[#a4b0be]" : "bg-[#ffff]"
            } rounded-[5px] !mb-1 border-1 border-[#a4b0be]`}
          >
            <img
              className="w-[18px] h-[18px] object-contain"
              src="https://static.livescore.com/i2/fh/england.jpg"
              alt="flag"
            />
            <p className="!ml-2 text-xs">{league.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
