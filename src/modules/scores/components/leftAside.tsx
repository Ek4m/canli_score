import React from "react";
import { AsideSearch } from "./search";
import { FilterList } from "./filterList";

export const ScoreLeftAside = () => {
  return (
    <div className="rounded-lg border-1 border-[#414141] lg:block hidden">
      <AsideSearch />
      <div className="w-full p-2 !mt-3">
        <FilterList title="Region" />
        <FilterList title="Teams" />
      </div>
    </div>
  );
};
