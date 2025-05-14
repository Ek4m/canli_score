import React, { FC } from "react";
import { ILeagueTableMatch } from "../types";

export const ScoreTable: FC<{ data: ILeagueTableMatch[] }> = ({ data }) => {
  return (
    <div className="w-full border-1 border-[#414141] rounded-md  overflow-x-auto">
      <table className="w-full ">
        <thead>
          <tr className="border-b-1 border-[#414141]">
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              #
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-left">
              Team
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              P
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              W
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              D
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              L
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              F
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              A
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              GD
            </th>
            <th className="py-3 px-2 text-sm text-[#2f3542cacaca] text-center">
              PTS
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.team_id} className="border-b-1 border-[#414141]">
              <td className="py-3 px-2 text-sm text-[#2f3542]">{index + 1}</td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-left ">
                <div className="flex items-center">
                  <img
                    className="w-[20px] !mr-3"
                    src={row.logo}
                    alt="team icon"
                  />
                  <p className="!ml-1">{row.name}</p>
                </div>
              </td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-center">
                {row.matches}
              </td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-left">
                {row.won}
              </td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-center">
                {row.drawn}
              </td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-center">
                {row.lost}
              </td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-center">
                {row.goals_scored}
              </td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-center">
                {row.goals_conceded}
              </td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-center">
                {row.goal_diff}
              </td>
              <td className="py-3 px-2 text-sm text-[#2f3542] text-center">
                {row.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
