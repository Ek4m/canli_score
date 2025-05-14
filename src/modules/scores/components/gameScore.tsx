import React, { FC, useMemo } from "react";
import { IMatchEvent } from "../types";

export const GameScore: FC<{ game: IMatchEvent["match"] }> = ({ game }) => {
  const gameTime = useMemo(() => {
    if (game.time.includes(":")) {
      if (game.time.indexOf(":") !== game.time.lastIndexOf(":"))
        return game.time.slice(0, game.time.lastIndexOf(":"));
      return game.time;
    }
    return game.time + "`";
  }, [game]);

  return (
    <div className="py-[2rem] px-[1rem] bg-[#f1f2f6] flex items-center justify-around rounded-md">
      <div className="flex flex-col items-center">
        <img
          src="https://static.livescore.com/competition/high/premier-league-2024.png"
          alt="team logo"
          className="bg-[#001e28] rounded-sm p-2 h-[50px]"
        />
        <p className="font-bold">{game.home_name}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[#2f3542] text-2xl font-bold">{game.score}</p>
        <p className="text-[#2f3542] text-lg">{gameTime}</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://static.livescore.com/competition/high/premier-league-2024.png"
          alt="team logo"
          className="bg-[#001e28] rounded-sm p-2 h-[50px]"
        />
        <p className="font-bold">{game.away_name}</p>
      </div>
    </div>
  );
};
