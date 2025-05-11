import React from "react";

import { LeagueMatchesList, ScoreLeftAside } from "@/modules/scores/components";

const SingleLeaguePage = () => {
  return (
    <div>
      <div className="!mt-8">
        <div className="grid w-full grid-cols-6 gap-x-3">
          <ScoreLeftAside />
          <LeagueMatchesList />
          <div className="col-span-2">Salaaam</div>
        </div>
      </div>
    </div>
  );
};

export default SingleLeaguePage;
