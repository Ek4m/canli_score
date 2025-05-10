"use client";
import React, { FC } from "react";
import * as Select from "@radix-ui/react-select";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

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
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className="inline-flex items-center justify-between rounded px-4 py-2 bg-white border border-gray-300 text-sm"
        aria-label="Food"
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <IoIosArrowDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white border border-gray-200 rounded shadow-md">
          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-gray-500"></Select.ScrollUpButton>
          <Select.Viewport className="p-2">
            {options.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                className="text-sm px-4 py-2 rounded cursor-pointer hover:bg-gray-100 flex items-center"
              >
                <Select.ItemText>{opt.title}</Select.ItemText>
                <Select.ItemIndicator className="ml-auto text-green-500">
                  <FaCheck />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-gray-500"></Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
