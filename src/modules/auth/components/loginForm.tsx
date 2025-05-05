"use client";
import React from "react";
import { TextInput } from "@/common/components/form";
import { useLogin } from "../hooks";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { ImGoogle2 } from "react-icons/im";

export const LoginForm = () => {
  const { loginRegisterObj, handleSubmit, state } = useLogin();
  return (
    <div className="max-w-[500px] !mt-2 !m-auto">
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
      <p className="!text-center !mt-3">
        <Link
          href="/auth/forgot-password"
          className="text-[#cacaca] !text-left w-full"
        >
          Forgot Password?
        </Link>
      </p>
      <p className="!text-center">
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
    </div>
  );
};
