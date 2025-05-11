import React, { FC, PropsWithChildren } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface FilterListProps extends PropsWithChildren {
  title: string;
}

export const FilterList: FC<FilterListProps> = ({ title, children }) => {
  return (
    <div className="!mb-4">
      <div className="flex justify-between items-center !mb-2">
        <h6 className="text-[10px] text-[#cacaca] uppercase font-bold">
          {title}
        </h6>
        <IoIosArrowForward color="white" size={15} />
      </div>
      <div>{children}</div>
    </div>
  );
};
