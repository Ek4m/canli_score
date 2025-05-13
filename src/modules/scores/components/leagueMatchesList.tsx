"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";

import { useGetLeagueTable, useGetMatchesByLeague } from "../hooks";
import { LeagueBadge } from "./league";
import { LeagueMatchesOverview } from "./leagueMatchesOverview";
import { ScoreTable } from "./scoreTable";

export const LeagueMatchesList = () => {
  const { leagueId } = useParams<{ leagueId: string }>();
  const { data: leagueMatches } = useGetMatchesByLeague(leagueId);
  const { data: tableData } = useGetLeagueTable(leagueId);
  const [visibleUI, setVisibleUI] = useState<"matches" | "table">("matches");

  return (
    <div className="lg:col-span-3 col-span-6 rounded-lg border-1 border-[#414141] p-3">
      {leagueMatches && (
        <div className="w-full">
          <LeagueBadge
            league={leagueMatches?.futureFixture[0].competition}
            countryName={leagueMatches.pastFixture[0].matches[0].country.name}
          />
          <div className="flex items-center border-b-1 border-grey !mb-[1rem] pb-2">
            <button
              className={`font-semibold !mr-2 ${
                visibleUI === "matches" ? "text-orange-500" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setVisibleUI("matches")}
            >
              Matches
            </button>
            <button
              className={`font-semibold !mr-2 ${
                visibleUI === "table" ? "text-orange-500" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setVisibleUI("table")}
            >
              Table
            </button>
          </div>
        </div>
      )}
      {leagueMatches &&
        (visibleUI === "matches" ? (
          <LeagueMatchesOverview
            futureFixture={leagueMatches?.futureFixture}
            pastFixture={leagueMatches.pastFixture}
          />
        ) : (
          tableData && <ScoreTable data={tableData} />
        ))}
    </div>
  );
};
