"use client";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export const Modal: FC<PropsWithChildren<{ trigger: ReactNode }>> = ({
  children,
  trigger,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className="bg-white rounded-lg p-6 shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96">
          <Dialog.Title> </Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
