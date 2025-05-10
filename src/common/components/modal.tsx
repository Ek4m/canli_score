"use client";
import React, { FC, PropsWithChildren } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

export const Modal: FC<PropsWithChildren> = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Modal
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className="bg-white rounded-lg p-6 shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96">
          <Dialog.Title className="text-xl font-semibold">
            Modal Title
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            This is a Radix UI modal.
          </Dialog.Description>

          <div className="mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Confirm
            </button>
          </div>

          <Dialog.Close className="absolute top-3 right-3">
            <IoMdClose />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
