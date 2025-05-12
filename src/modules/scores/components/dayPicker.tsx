"use client";

import React, { FC, PropsWithChildren } from "react";
import * as Popover from "@radix-ui/react-popover";
import { DayPicker as ReactDayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export const DayPicker: FC<
  PropsWithChildren<{ value: Date; onSelect(val: Date): void }>
> = ({ children, onSelect, value }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          className="bg-white border p-4 rounded shadow-md z-50"
        >
          <ReactDayPicker
            required
            mode="single"
            selected={value}
            onSelect={onSelect}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
