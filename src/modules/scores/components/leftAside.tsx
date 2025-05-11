"use client";
import React, { useContext } from "react";

import { AsideSearch } from "./search";
import { FilterList } from "./filterList";
import { CountriesList } from "./countriesList";
import { ScoresContext } from "../contexts";
import { LeaguesListByCountry } from "./leaguesList";
import { IoIosArrowBack } from "react-icons/io";

export const ScoreLeftAside = () => {
  const { countryId, setCountryId } = useContext(ScoresContext);

  return (
    <div className="rounded-lg border-1 border-[#414141] lg:block hidden h-[max-content]">
      {!!countryId ? (
        <div
          onClick={() => setCountryId("")}
          role="button"
          className="border-b-1 border-[#414141] p-3 flex items-center cursor-pointer"
        >
          <IoIosArrowBack color="white" />
          <p className="text-white text-sm !ml-1">Select league</p>
        </div>
      ) : (
        <AsideSearch />
      )}
      <div className="w-full p-2 !mt-3">
        {!!countryId ? (
          <FilterList title="Competitions">
            <LeaguesListByCountry />
          </FilterList>
        ) : (
          <FilterList title="Region">
            <CountriesList />
          </FilterList>
        )}
      </div>
    </div>
  );
};
