import React from "react";
import { FAQ_LIST } from "../data";
import { FaqListElement } from "./faqListElem";

export const FaqList = () => {
  return (
    <div className="w-full !mt-[2rem]">
      <h1 className="text-2xl font-bold !mb-2 text-[#2f3542]">
        Tez-tez verilən suallar
      </h1>
      {FAQ_LIST.map((faq) => (
        <FaqListElement key={faq.answer} faq={faq} />
      ))}
    </div>
  );
};
