import React, { FC } from "react";
import { Listbox } from "@headlessui/react";

interface SelectProps {
  value: string;
  onChange(val: string): void;
  placeholder: string;
  options: { value: string; title: string }[];
}

export const AppSelect: FC<SelectProps> = ({
  onChange,
  value,
  options,
  placeholder,
}) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="w-full px-4 py-2 text-left border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          {value ? value : <span>{placeholder}</span>}
        </Listbox.Button>
        <Listbox.Options className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <Listbox.Option key={option.value} value={option.value}>
              {({ active, selected }) => (
                <div
                  className={`px-4 py-2 cursor-pointer ${
                    active ? "bg-blue-500 text-white" : ""
                  } ${selected ? "font-semibold" : ""}`}
                >
                  {option.title}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
