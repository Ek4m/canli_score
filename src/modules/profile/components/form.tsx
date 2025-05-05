"use client";
import { TextInput } from "@/common/components/form";
import { Button } from "@headlessui/react";
import React from "react";
import { useProfile } from "../hooks";

export const ProfileForm = () => {
  const { handleSubmit, registerRegisterObj, state } = useProfile();
  return (
    <div className="w-full !mt-6">
      <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center">
        Update your profile
      </h1>
      <h1 className="text-[red] !mb-2 text-center">
        {state.errors.root?.message}
      </h1>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-2">
        <TextInput
          {...registerRegisterObj.firstName}
          placeholder="First name..."
          type="text"
        />
        <TextInput
          {...registerRegisterObj.lastName}
          placeholder="Last name..."
          type="text"
        />
        <TextInput
          {...registerRegisterObj.phone}
          placeholder="Phone..."
          type="text"
        />
        <TextInput
          {...registerRegisterObj.city}
          placeholder="City..."
          type="text"
        />
        <TextInput
          {...registerRegisterObj.country}
          placeholder="Country..."
          type="text"
        />
        <Button
          disabled={state.isLoading}
          type="submit"
          className="bg-black text-[#cacaca] w-full p-2  rounded-md cursor-pointer !mb-1"
        >
          Submit!
        </Button>
      </form>
    </div>
  );
};
