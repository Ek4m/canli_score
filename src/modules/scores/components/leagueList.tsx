import React, { FC } from "react";
import { LeagueListElement } from "./leagueListElem";
import { ILiveLeague } from "../types";
import { LeagueBadge } from "./league";
export const LeagueList: FC<{ league: ILiveLeague }> = ({ league }) => {
  return (
    <div className="!my-5">
      <LeagueBadge
        league={league.competition}
        countryName={league.matches[0].country?.name}
      />
      <div>
        {league.matches.map((game) => (
          <LeagueListElement game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};
