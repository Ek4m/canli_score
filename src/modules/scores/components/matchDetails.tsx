"use client";
import React, { useState } from "react";
import { useGetMatchEvents } from "../hooks";
import { useParams } from "next/navigation";
import { GameScore } from "./gameScore";
import { useTitle } from "@/common/hooks";
import { MatchEvents } from "./matchEvents";

export const MatchDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMatchEvents(id);
  const [section, setSection] = useState<"info" | "lineups" | "stats">("info");
  useTitle(`${data?.match.home_name} - ${data?.match.away_name}`);

  return (
    <div className="lg:col-span-3 col-span-6 rounded-lg border-1 border-[#747d8c] p-3">
      {data && (
        <>
          <GameScore game={data.match} />
          <div className="flex items-center border-b-1 border-grey !my-[1rem] pb-2">
            <button
              className={`font-semibold !mr-2 ${
                section === "info" ? "text-[#2f3542]" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setSection("info")}
            >
              Info
            </button>
            <button
              className={`font-semibold !mr-2 ${
                section === "lineups" ? "text-[#2f3542]" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setSection("lineups")}
            >
              Line-ups
            </button>
            <button
              className={`font-semibold !mr-2 ${
                section === "stats" ? "text-[#2f3542]" : "text-[#cacaca]"
              } cursor-pointer`}
              onClick={() => setSection("stats")}
            >
              Stats
            </button>
          </div>
          {section === "info" && <MatchEvents events={data.event} />}
        </>
      )}
    </div>
  );
};
