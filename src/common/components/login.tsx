"use client";
import React, { useState } from "react";
import { ImGoogle2 } from "react-icons/im";
import { Button } from "@headlessui/react";

import { Modal } from "./modal";
import { TextInput } from "./form";
import Link from "next/link";
import { useLogin } from "@/modules/auth/hooks";

export const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const { loginRegisterObj, handleSubmit, state } = useLogin();

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
        <h1 className="text-[red] !mb-2">{state.errors.root?.message}</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <TextInput
            {...loginRegisterObj.email}
            placeholder="Your Email..."
            type="email"
          />
          <TextInput
            {...loginRegisterObj.password}
            placeholder="Your Password..."
            type="password"
          />
          <Button
            disabled={state.isLoading}
            type="submit"
            className="bg-black text-[#cacaca] w-full p-2 !mt-2 rounded-md cursor-pointer"
          >
            Submit!
          </Button>
        </form>
        <p className="!text-left">
          <Link
            href="/auth/forgot-password"
            className="text-[#cacaca] !text-left w-full"
          >
            Forgot Password?
          </Link>
        </p>
        <p className="!text-left !my-2">
          <Link
            href="/auth/register"
            className="text-[#cacaca] !text-left w-full"
          >
            Don{"'"}t you have account? Create
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
