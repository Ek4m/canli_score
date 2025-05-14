"use client";
import { useContext, useDeferredValue, useMemo } from "react";
import { ScoresContext } from "../contexts";

export const CountriesList = () => {
  const { setCountryId, countryId, search, countries } =
    useContext(ScoresContext);
  const optimizedSearch = useDeferredValue(search);

  const filteredCountries = useMemo(() => {
    if (!countries) return [];
    return countries.filter((c) => c.name.includes(optimizedSearch));
  }, [countries, optimizedSearch]);

  return (
    <div className="h-[100vh] overflow-y-scroll">
      {filteredCountries.map((country) => (
        <div
          role="button"
          onClick={() => setCountryId(country.id)}
          key={country.id}
          className={`px-2 py-2 cursor-pointer hover:bg-[#a4b0be]  flex items-center ${
            countryId === country.id ? "bg-[#a4b0be]" : "bg-[#ffff]"
          } rounded-[5px] !mb-1 border-1 border-[#a4b0be]`}
        >
          <img
            className="w-[18px] h-[18px] object-contain"
            src={`/assets/flags/${country.id}.png`}
            alt="flag"
          />
          <p className="!ml-2 text-xs">{country.name}</p>
        </div>
      ))}
    </div>
  );
};
