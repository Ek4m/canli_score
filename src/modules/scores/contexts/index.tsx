"use client";
import React, { createContext, FC, PropsWithChildren, useState } from "react";

export const ScoresContext = createContext<{
  countryId: string;
  setCountryId(val: string): void;
}>({
  countryId: "",
  setCountryId() {},
});

export const ScoresProvider: FC<PropsWithChildren> = ({ children }) => {
  const [countryId, setCountryId] = useState("");

  return (
    <ScoresContext.Provider value={{ countryId, setCountryId }}>
      {children}
    </ScoresContext.Provider>
  );
};
