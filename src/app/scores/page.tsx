import React from "react";

import {
  BranchesList,
  ScoreLeftAside,
  ScoreMain,
} from "@/modules/scores/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scores",
};

const ScoresPage = () => {
  return (
    <div className="!mt-8">
      <BranchesList />
      <div className="grid w-full grid-cols-6 gap-x-3">
        <ScoreLeftAside />
        <ScoreMain />
        <div className="col-span-2">Salaaam</div>
      </div>
    </div>
  );
};

export default ScoresPage;
