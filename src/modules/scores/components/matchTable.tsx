import React, { FC } from "react";
import { useGetLeagueTable } from "../hooks";
import { ScoreTable } from "./scoreTable";

export const MatchTable: FC<{ id: string }> = ({ id }) => {
  const { data } = useGetLeagueTable(id);
  return data && <ScoreTable data={data} />;
};
