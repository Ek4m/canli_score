"use client";
import React, { createContext, FC, PropsWithChildren, useState } from "react";
import { useGetCountries, useGetLeaguesByCountry } from "../hooks";
import { ICountry, ILeague } from "../types";

export const ScoresContext = createContext<{
  countryId: string;
  setCountryId(val: string): void;
  search: string;
  setSearch(val: string): void;
  countries: ICountry[];
  leaguesByCountry: ILeague[];
}>({
  countryId: "",
  setCountryId() {},
  search: "",
  setSearch() {},
  countries: [],
  leaguesByCountry: [],
});

export const ScoresProvider: FC<PropsWithChildren> = ({ children }) => {
  const [countryId, setCountryId] = useState("");
  const [search, setSearch] = useState("");

  const { data } = useGetCountries();
  const { data: leaguesByCountry } = useGetLeaguesByCountry(countryId);

  return (
    <ScoresContext.Provider
      value={{
        countryId,
        setCountryId,
        search,
        setSearch,
        countries: data || [],
        leaguesByCountry: leaguesByCountry || [],
      }}
    >
      {children}
    </ScoresContext.Provider>
  );
};
