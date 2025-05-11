"use client";
import React from "react";
import { LeagueList } from "./leagueList";
import { useGetLiveMatches } from "../hooks";

export const LiveMatches = () => {
  const { data } = useGetLiveMatches();
  return (
    <div className="lg:col-span-3 col-span-6 rounded-lg border-1 border-[#414141] p-3 h-[100vh] overflow-scroll">
      {data?.map((league) => (
        <LeagueList league={league} key={league.competition.id} />
      ))}
    </div>
  );
};
