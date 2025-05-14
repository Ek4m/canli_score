import React, { FC, InputHTMLAttributes } from "react";

export const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className="p-2  !mb-2 w-full  bg-[#f1f2f6] focus:bg-[#ced6e0] focus:outline-none rounded-md  text-[#2f3542] border-1 border-[#ced6e0]"
    />
  );
};

export const FormGroup: FC<
  InputHTMLAttributes<HTMLInputElement> & { label: string }
> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-[#cacaca] !mb-1">{label}</label>
      <TextInput {...props} />
    </div>
  );
};
