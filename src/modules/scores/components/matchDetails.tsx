"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";

import { useGetMatchEvents } from "../hooks";
import { useTitle } from "@/common/hooks";

import { GameScore } from "./gameScore";
import { MatchEvents } from "./matchEvents";
import { MatchTable } from "./matchTable";
import { MatchStats } from "./matchStats";

export const MatchDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMatchEvents(id);
  const [section, setSection] = useState<
    "info" | "lineups" | "stats" | "table"
  >("info");
  useTitle(`${data?.match.home_name} - ${data?.match.away_name}`);

  return (
    <div className="lg:col-span-3 col-span-6 rounded-lg border-1 border-[#747d8c] p-3">
      {data && (
        <>
          <GameScore game={data.match} />
          <div className="flex items-center border-b-1 border-grey !my-[1rem] pb-2">
            <button
              className={`font-semibold !mr-3 ${
                section === "info" ? "text-[#2f3542]" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setSection("info")}
            >
              Info
            </button>
            <button
              className={`font-semibold !mr-3 ${
                section === "lineups" ? "text-[#2f3542]" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setSection("lineups")}
            >
              Line-ups
            </button>
            <button
              className={`font-semibold !mr-3 ${
                section === "stats" ? "text-[#2f3542]" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setSection("stats")}
            >
              Stats
            </button>
            <button
              className={`font-semibold !mr-3 ${
                section === "table" ? "text-[#2f3542]" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setSection("table")}
            >
              Table
            </button>
          </div>
          {section === "info" && <MatchEvents events={data.event} />}
          {section === "table" && <MatchTable id={data.match.competition_id} />}
          {section === "stats" && <MatchStats id={data.match.id} />}
        </>
      )}
    </div>
  );
};
