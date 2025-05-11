"use client";
import React, { useContext } from "react";
import { ScoresContext } from "../contexts";
import { useGetLeaguesByCountry } from "../hooks";
import Link from "next/link";

export const LeaguesListByCountry = () => {
  const { countryId } = useContext(ScoresContext);
  console.log("COUNTRY ID", countryId);
  const { data } = useGetLeaguesByCountry(countryId);
  return (
    <div className="h-[100vh] overflow-y-scroll">
      {data?.map((league) => (
        <Link key={league.id} href={`/scores/leagues/${league.id}`}>
          <div
            role="button"
            className={`px-2 py-2 cursor-pointer  overflow-scroll hover:bg-[#414141]  flex items-center ${
              countryId === league.id ? "bg-[#414141]" : "bg-[#181818]"
            } rounded-[5px] !mb-1`}
          >
            <img
              className="w-[18px] h-[18px] object-contain"
              src="https://static.livescore.com/i2/fh/england.jpg"
              alt="flag"
            />
            <p className="!ml-2 text-xs text-white">{league.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
