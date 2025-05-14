import { MatchDetails, ScoreLeftAside } from "@/modules/scores/components";
import React from "react";

const SingleGamePage = () => {
  return (
    <div>
      <div className="!mt-8">
        <div className="grid w-full grid-cols-6 gap-x-3">
          <ScoreLeftAside />
          <MatchDetails />
          <div className="col-span-2">Burda reklam olacaq</div>
        </div>
      </div>
    </div>
  );
};

export default SingleGamePage;
