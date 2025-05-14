import Link from "next/link";
import React, { FC, useMemo } from "react";
import { FaRegStar } from "react-icons/fa";

import { ILiveLeague } from "../types";
import { format } from "date-fns";

export const LeagueListElement: FC<{
  game: ILiveLeague["matches"][number];
}> = ({ game }) => {
  const scores = useMemo(() => {
    const score = game.scores?.score?.split(" - ") || ["", ""];
    return {
      home: score[0].includes("?") ? "" : score[0],
      away: score[1].includes("?") ? "" : score[1],
    };
  }, [game]);

  const gameTime = useMemo(() => {
    if (game.time.includes(":")) {
      if (game.time.indexOf(":") !== game.time.lastIndexOf(":"))
        return game.time.slice(0, game.time.lastIndexOf(":"));
      return game.time;
    }
    return game.time + "`";
  }, [game]);

  const gameDate = useMemo(
    () => (game.date ? format(new Date(game.date), "d MMM") : ""),
    [game]
  );

  return (
    <Link
      href={`/game/${game.id}`}
      className="flex justify-between bg-[#f1f2f6] py-2 pl-4 pr-3 rounded-lg !mb-1 !relative overflow-hidden h-[70px] hover:bg-[#dfe4ea] cursor-pointer"
    >
      {game.status === "IN PLAY" && (
        <div className="!absolute rounded-md w-[10px] h-[56px] bg-orange-500 left-[-5px] top-[7px]"></div>
      )}
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          {game.status !== "IN PLAY" && (
            <h6 className="text-[#57606f] !mb-1 text-xs">{gameDate}</h6>
          )}
          <h6
            className={`${
              game.status !== "IN PLAY" ? "text-[#2f3542]" : "text-orange-400"
            } text-xs font-semibold`}
          >
            {gameTime}
          </h6>
        </div>
        <div className="flex flex-col items-start !ml-2">
          <div className="flex items-center !mb-2">
            <img
              className="w-[20px] !mr-3"
              src={game.home.logo}
              alt="team icon"
            />
            <p className="text-[#2f3542] text-sm">{game.home.name}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[20px] !mr-3"
              src={game.away.logo}
              alt="team icon"
            />
            <p className="text-[#2f3542] text-sm">{game.away.name}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col ">
          <p className=" !mb-2 text-[#2f3542]">{scores.home}</p>
          <p className=" text-[#2f3542]">{scores.away}</p>
        </div>
        <button className="!ml-3 cursor-pointer">
          <FaRegStar color="#cacaca" size={20} />
        </button>
      </div>
    </Link>
  );
};
