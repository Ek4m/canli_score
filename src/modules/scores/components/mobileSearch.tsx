"use client";
import React, {
  useCallback,
  useContext,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { ScoresContext } from "../contexts";
import Link from "next/link";

export const MobileSearch = () => {
  const {
    search,
    setSearch,
    countries,
    setCountryId,
    leaguesByCountry,
    countryId,
  } = useContext(ScoresContext);
  const [open, setOpen] = useState(false);
  const optimizedSearch = useDeferredValue(search);

  useEffect(() => {
    const scrollValue = open ? "hidden" : "scroll";
    document.body.style.overflowY = scrollValue;
  }, [open]);

  const onResetToCountries = useCallback(() => {
    setCountryId("");
    setSearch("");
  }, [setCountryId, setSearch]);

  const filteredCountries = useMemo(() => {
    if (!countries) return [];
    return countries.filter((c) => c.name.includes(optimizedSearch));
  }, [countries, optimizedSearch]);

  return (
    <div className="lg:hidden block !mb-3">
      <button
        onClick={() => setOpen(true)}
        className="border-1 rounded-md border-[#414141] p-3"
      >
        <FaSearch color="white" size={20} />
      </button>
      {open && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#111] z-2 p-[2rem]">
          <div className="flex items-center justify-between !mb-2">
            <h1 className="text-white text-[1.5rem]">Search</h1>
            <button onClick={() => setOpen(false)}>
              <IoClose size={30} color="white" />
            </button>
          </div>
          {countryId ? (
            <button onClick={onResetToCountries} className="text-white">
              {"<"} Back
            </button>
          ) : (
            <input
              className="border-2 text-white placeholder-[#414141] border-[#cacaca] w-full p-2 rounded-md"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
          <div className="h-[calc(100vh-150px)] w-full overflow-y-scroll !mt-2">
            {!countryId ? (
              filteredCountries.map((country) => (
                <div
                  role="button"
                  onClick={() => setCountryId(country.id)}
                  key={country.id}
                  className={`px-2 py-2 cursor-pointer hover:bg-[#414141]  flex items-center bg-[#181818]  rounded-[5px] !mb-1`}
                >
                  <img
                    className="w-[18px] h-[18px] object-contain"
                    src="https://static.livescore.com/i2/fh/england.jpg"
                    alt="flag"
                  />
                  <p className="!ml-2 text-xs text-white">{country.name}</p>
                </div>
              ))
            ) : (
              <>
                {leaguesByCountry.map((league) => (
                  <Link key={league.id} href={`/scores/leagues/${league.id}`}>
                    <div
                      role="button"
                      className={`px-2 py-2 cursor-pointer  overflow-scroll hover:bg-[#414141]  flex items-center ${
                        countryId === league.id
                          ? "bg-[#414141]"
                          : "bg-[#181818]"
                      } rounded-[5px] !mb-1`}
                    >
                      <img
                        className="w-[18px] h-[18px] object-contain"
                        src="https://static.livescore.com/i2/fh/england.jpg"
                        alt="flag"
                      />
                      <p className="!ml-2 text-xs text-white">{league.name}</p>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
