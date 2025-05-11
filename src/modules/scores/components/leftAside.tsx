"use client";
import React, { useContext } from "react";

import { AsideSearch } from "./search";
import { FilterList } from "./filterList";
import { CountriesList } from "./countriesList";
import { ScoresContext } from "../contexts";
import { LeaguesListByCountry } from "./leaguesList";

export const ScoreLeftAside = () => {
  const { countryId } = useContext(ScoresContext);
  console.log("COUNTRY ID", countryId);

  return (
    <div className="rounded-lg border-1 border-[#414141] lg:block hidden h-[max-content]">
      <AsideSearch />
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
