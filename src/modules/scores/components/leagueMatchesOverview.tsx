import React, { FC, useMemo, useState } from "react";

import { ILiveLeague } from "../types";
import { LeagueListElement } from "./leagueListElem";

export const LeagueMatchesOverview: FC<{
  pastFixture: ILiveLeague[];
  futureFixture: ILiveLeague[];
}> = ({ futureFixture, pastFixture }) => {
  const [stage, setStage] = useState<"fixtures" | "results">("results");
  const showPastFixture = useMemo(() => {
    if (pastFixture)
      return {
        ...pastFixture[0],
        matches: pastFixture[0].matches.filter(
          (e) => e.round === pastFixture[0].matches[0].round
        ),
      };
  }, [pastFixture]);

  const showFutureFixture = useMemo(() => {
    if (futureFixture)
      return {
        ...futureFixture[0],
        matches: futureFixture[0].matches.filter(
          (e) => e.round === futureFixture[0].matches[0].round
        ),
      };
  }, [futureFixture]);
  return (
    <>
      <div className="!mb-3">
        <button
          onClick={() => setStage("results")}
          className={`px-3 py-1 uppercase border-2  rounded-[5rem] !mr-2 text-sm cursor-pointer ${
            stage === "results"
              ? "text-[black] border-[black]"
              : "text-[gray] border-[grey]"
          }`}
        >
          Results
        </button>
        <button
          onClick={() => setStage("fixtures")}
          className={`px-3 py-1 uppercase border-2  rounded-[5rem] !mr-2 text-sm cursor-pointer ${
            stage === "fixtures"
              ? "text-[black] border-[black]"
              : "text-[gray] border-[grey]"
          }`}
        >
          Fixtures
        </button>
      </div>
      {showPastFixture &&
        stage === "results" &&
        showPastFixture.matches.map((game) => (
          <LeagueListElement game={game} key={game.id} />
        ))}
      {showFutureFixture &&
        stage === "fixtures" &&
        showFutureFixture.matches.map((game) => (
          <LeagueListElement game={game} key={game.id} />
        ))}
    </>
  );
};
