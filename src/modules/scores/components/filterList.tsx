import React, { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface FilterListProps {
  title: string;
}

export const FilterList: FC<FilterListProps> = ({ title }) => {
  return (
    <div className="!mb-4">
      <div className="flex justify-between items-center !mb-2">
        <h6 className="text-[10px] text-[#cacaca] uppercase font-bold">
          {title}
        </h6>
        <IoIosArrowForward color="white" size={15} />
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6].map((listItem) => (
          <div
            key={listItem}
            className="px-2 py-2 cursor-pointer hover:bg-[#414141]  flex items-center bg-[#181818] rounded-[5px] !mb-1"
          >
            <img
              className="w-[18px] h-[18px] object-contain"
              src="https://static.livescore.com/i2/fh/england.jpg"
              alt="flag"
            />
            <p className="!ml-2 text-xs text-white">England</p>
          </div>
        ))}
      </div>
    </div>
  );
};
