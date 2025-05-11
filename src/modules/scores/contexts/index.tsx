"use client";
import React, { createContext, FC, PropsWithChildren, useState } from "react";

export const ScoresContext = createContext<{
  countryId: string;
  setCountryId(val: string): void;
  search: string;
  setSearch(val: string): void;
}>({
  countryId: "",
  setCountryId() {},
  search: "",
  setSearch() {},
});

export const ScoresProvider: FC<PropsWithChildren> = ({ children }) => {
  const [countryId, setCountryId] = useState("");
  const [search, setSearch] = useState("");

  return (
    <ScoresContext.Provider
      value={{ countryId, setCountryId, search, setSearch }}
    >
      {children}
    </ScoresContext.Provider>
  );
};
