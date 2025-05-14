import React, { FC, useMemo } from "react";

import { ILiveLeague } from "../types";
import { LeagueListElement } from "./leagueListElem";

export const LeagueMatchesOverview: FC<{
  pastFixture: ILiveLeague[];
  futureFixture: ILiveLeague[];
}> = ({ futureFixture, pastFixture }) => {
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
      <h3 className="text-[#2f3542] uppercase !mb-2 text-xs font-bold">Results</h3>
      {showPastFixture &&
        showPastFixture.matches.map((game) => (
          <LeagueListElement game={game} key={game.id} />
        ))}
      <br />
      <h3 className="text-[#2f3542] uppercase !mb-2 text-xs font-bold">Fixtures</h3>
      {showFutureFixture &&
        showFutureFixture.matches.map((game) => (
          <LeagueListElement game={game} key={game.id} />
        ))}
    </>
  );
};
