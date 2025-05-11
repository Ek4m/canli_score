import { LiveMatches, ScoreLeftAside } from "@/modules/scores/components";
import React from "react";

const LiveMatchesPage = () => {
  return (
    <div>
      <div className="!mt-8">
        <div className="grid w-full grid-cols-6 gap-x-3">
          <ScoreLeftAside />
          <LiveMatches />
          <div className="col-span-2">Salaaam</div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchesPage;
