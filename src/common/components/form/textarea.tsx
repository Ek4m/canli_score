import React, { FC, InputHTMLAttributes } from "react";

export const Textarea: FC<InputHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  return (
    <textarea
      rows={5}
      {...props}
      className={`p-2  !mb-2 w-full  bg-[#f1f2f6] focus:bg-[#ced6e0] focus:outline-none rounded-md  text-[#2f3542] border-1 border-[#ced6e0] ${props.className}`}
    />
  );
};
