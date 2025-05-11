"use client";
import { useContext, useDeferredValue, useMemo } from "react";
import { useGetCountries } from "../hooks";
import { ScoresContext } from "../contexts";

export const CountriesList = () => {
  const { data } = useGetCountries();
  const { setCountryId, countryId, search } = useContext(ScoresContext);
  const optimizedSearch = useDeferredValue(search);
  console.log(data);
  const countries = useMemo(() => {
    if (!data) return [];
    return data.filter((c) => c.name.includes(optimizedSearch));
  }, [data, optimizedSearch]);

  return (
    <div className="h-[100vh] overflow-y-scroll">
      {countries.map((country) => (
        <div
          role="button"
          onClick={() => setCountryId(country.id)}
          key={country.id}
          className={`px-2 py-2 cursor-pointer  overflow-scroll hover:bg-[#414141]  flex items-center ${
            countryId === country.id ? "bg-[#414141]" : "bg-[#181818]"
          } rounded-[5px] !mb-1`}
        >
          <img
            className="w-[18px] h-[18px] object-contain"
            src="https://static.livescore.com/i2/fh/england.jpg"
            alt="flag"
          />
          <p className="!ml-2 text-xs text-white">{country.name}</p>
        </div>
      ))}
    </div>
  );
};
