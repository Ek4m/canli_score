import { ScoresProvider } from "@/modules/scores/contexts";
import React, { FC, PropsWithChildren } from "react";

const ScoreLayout:FC<PropsWithChildren> = ({ children}) => {
  return <ScoresProvider>{children}</ScoresProvider>;
};

export default ScoreLayout;
