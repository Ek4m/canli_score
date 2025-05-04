import React, { FC, InputHTMLAttributes } from "react";

export const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className="p-2  !mb-2 w-full placeholder-[#7c7c7c] bg-[#181818] focus:bg-[#414141] focus:outline-none rounded-md placeholder-xs text-white"
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
