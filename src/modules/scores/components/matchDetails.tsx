"use client";
import React from "react";
import { useGetMatchEvents } from "../hooks";
import { useParams } from "next/navigation";
import { GameScore } from "./gameScore";
import { useTitle } from "@/common/hooks";

export const MatchDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMatchEvents(id);

  useTitle(`${data?.match.home_name} - ${data?.match.away_name}`);

  return (
    <div className="lg:col-span-3 col-span-6 rounded-lg border-1 border-[#747d8c] p-3">
      {data && <GameScore game={data.match} />}
    </div>
  );
};
