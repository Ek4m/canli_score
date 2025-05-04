import React from "react";

export const BranchesList = () => {
  return (
    <div className="py-3">
      {[1, 2, 3, 4, 5, 6].map((sport) => (
        <button
          className="cursor-pointer px-3 py-2 !mr-2 rounded-3xl bg-[#181818]  text-white text-sm hover:!bg-[#414141]"
          key={sport}
        >
          Football
        </button>
      ))}
    </div>
  );
};
