import React from "react";
import { Metadata } from "next";

import { ScoreLeftAside, ScoreMain } from "@/modules/scores/components";

export const metadata: Metadata = {
  title: "Scores",
};

const ScoresPage = () => {
  return (
    <div>
      <div className="!mt-8">
        <div className="grid w-full grid-cols-6 gap-x-3">
          <ScoreLeftAside />
          <ScoreMain />
          <div className="col-span-2">Burda reklam olacaq</div>
        </div>
      </div>
    </div>
  );
};

export default ScoresPage;
