"use client";
import React, { FC } from "react";
import { useGetMatchStats } from "../hooks";
import { AppSpinner } from "@/common/components";

export const MatchStats: FC<{ id: string }> = ({ id }) => {
  const { data, isFetching } = useGetMatchStats(id);

  return (
    <>
      {isFetching && <AppSpinner />}
      {data?.map((e) => (
        <div className="w-full !mb-2" key={e.label}>
          <div className="w-full flex items-center justify-between">
            <p>{e.home.value}</p>
            <p>{e.label}</p>
            <p>{e.away.value}</p>
          </div>
          <div className="w-full grid grid-cols-2 gap-x-3">
            <div className="bg-[#f1f2f6] flex justify-end rounded-sm overflow-hidden">
              <div
                style={{
                  width: `${e.home.percent}%`,
                  backgroundColor: e.winner === "h" ? " #A3C940" : "#747d8c",
                }}
                className={`h-[10px]`}
              ></div>
            </div>
            <div className="bg-[#f1f2f6] flex justify-start rounded-sm overflow-hidden">
              <div
                style={{
                  width: `${e.away.percent}%`,
                  backgroundColor: e.winner === "a" ? " #A3C940" : "#747d8c",
                }}
                className={`h-[10px]`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
