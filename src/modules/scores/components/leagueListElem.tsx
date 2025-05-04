import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";

export const LeagueListElement = () => {
  return (
    <Link
      href="/game/1"
      className="flex justify-between bg-[#181818] py-2 pl-4 pr-3 rounded-lg !mb-1 !relative overflow-hidden h-[70px] hover:bg-[#414141] cursor-pointer"
    >
      <div className="!absolute rounded-md w-[10px] h-[56px] bg-orange-500 left-[-5px] top-[7px]"></div>
      <div className="flex items-center">
        <h6 className="text-orange-400 text-xs font-semibold">56`</h6>
        <div className="flex flex-col items-start !ml-2">
          <div className="flex items-center !mb-2">
            <img
              className="w-[20px] !mr-3"
              src="https://lsm-static-prod.livescore.com/medium/enet/9937.png"
              alt="team icon"
            />
            <p className="text-[#cacaca] text-sm">Brentford</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[20px] !mr-3"
              src="https://lsm-static-prod.livescore.com/medium/enet/10260.png"
              alt="team icon"
            />
            <p className="text-[#cacaca] text-sm">Manchester United</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col ">
          <p className=" !mb-2 text-white font-semibold">2</p>
          <p className=" text-white font-semibold">2</p>
        </div>
        <button className="!ml-3 cursor-pointer">
          <FaRegStar color="#cacaca" size={20} />
        </button>
      </div>
    </Link>
  );
};
