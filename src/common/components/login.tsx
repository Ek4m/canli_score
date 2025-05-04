"use client";
import React, { useState } from "react";
import { ImGoogle2 } from "react-icons/im";
import { Button } from "@headlessui/react";

import { Modal } from "./modal";
import { TextInput } from "./form";
import Link from "next/link";

export const LoginModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="text-white cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Log in
      </button>
      <Modal open={open} setOpen={setOpen}>
        <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center">
          Welcome back
        </h1>
        <TextInput placeholder="Your Email..." type="email" />
        <TextInput placeholder="Your Password..." type="password" />
        <Button className="bg-black text-[#cacaca] w-full p-2 !mt-2 rounded-md cursor-pointer">
          Submit!
        </Button>
        <p className="!text-left">
          <Link
            href="/auth/forgot-password"
            className="text-[#cacaca] !text-left w-full"
          >
            Forgot Password?
          </Link>
        </p>
        <br />
        <Button className="bg-black text-[#cacaca] w-full p-2 !mt-2 rounded-md cursor-pointer flex items-center justify-center">
          <ImGoogle2 size={30} color="white" />
          <p className="!ml-2">Continue with Google</p>
        </Button>
      </Modal>
    </>
  );
};
