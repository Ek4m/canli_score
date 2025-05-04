import React, { FC, PropsWithChildren } from "react";
import { IoMdClose } from "react-icons/io";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface ModalProps {
  open: boolean;
  setOpen(val: boolean): void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  open,
  setOpen,
  children,
}) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 !relative">
          <DialogPanel
            transition
            className="relative  transform overflow-hidden rounded-lg bg-[#1b1b1b] shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <button
              className="!absolute right-[1rem] top-[1rem] cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoMdClose color="white" size={30} />
            </button>
            <div className="px-[6rem] py-[4rem]">{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
