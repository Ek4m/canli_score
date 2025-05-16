"use client";
import React, { FC, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

import { FAQ_LIST } from "../data";

export const FaqListElement: FC<{ faq: (typeof FAQ_LIST)[number] }> = ({
  faq,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full !mb-[1rem]">
      <div
        className=" flex items-center justify-between rounded-lg bg-[#dfe4ea] cursor-pointer hover:bg-[#ced6e0] p-[1rem]"
        role="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p>{faq.question}</p>
        {open ? <FaMinus /> : <FaPlus />}
      </div>
      {open && <div className="!mt-2  !ml-[1rem]">{faq.answer}</div>}
    </div>
  );
};
