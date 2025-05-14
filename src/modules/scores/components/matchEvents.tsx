import React, { FC } from "react";
import { IoFootball } from "react-icons/io5";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { TfiExchangeVertical } from "react-icons/tfi";

import { IMatchEvent } from "../types";

const EventMemo: FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case "GOAL":
      return <IoFootball size={20} className="!mx-1" />;
    case "YELLOW_CARD":
      return (
        <TbRectangleVerticalFilled size={20} className="!mx-1" color="yellow" />
      );
    case "RED_CARD":
      return (
        <TbRectangleVerticalFilled size={20} className="!mx-1" color="red" />
      );
    case "SUBSTITUTION":
      return <TfiExchangeVertical size={20} color="grey" className="!mx-1" />;
    default:
      return null;
  }
};

export const MatchEvents: FC<{ events: IMatchEvent["event"] }> = ({
  events,
}) => {
  return (
    <div className=" rounded-lg border-1 border-[#747d8c] flex flex-col">
      {events.map((event) => (
        <div
          className="w-full px-3 py-1 border-b-1 border-[#747d8c] flex items-center h-[60px]"
          key={event.id}
        >
          <p className="!mr-3">{event.time}`</p>
          <div className="flex-1 grid grid-cols-2 gap-x-4">
            <div className="flex justify-end">
              {event.home_away === "h" && (
                <div className="flex items-center">
                  <div className="flex flex-col items-start">
                    <p className="text-[#2f3542]">{event.player}</p>
                    <p className="text-xs text-[#57606f]">{event.info}</p>
                  </div>
                  <EventMemo type={event.event} />
                </div>
              )}
            </div>
            <div className="flex justify-start">
              {event.home_away === "a" && (
                <div className="flex items-center">
                  <EventMemo type={event.event} />
                  <div className="flex flex-col items-start">
                    <p>{event.player}</p>
                    <p className="text-xs">{event.info}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
