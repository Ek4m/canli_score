"use client";
import React from "react";
import { Button } from "@radix-ui/themes";

import { useContactForm } from "../hooks";
import { Textarea, TextInput } from "@/common/components/form";

export const ContactForm = () => {
  const { handleSubmit, contactObj, isSubmitting, errors, success } =
    useContactForm();
  return (
    <form onSubmit={handleSubmit} className="w-full !mt-[2rem]">
      <h1 className="text-2xl !mb-[1rem] font-bold">Contact us</h1>
      {errors.root && (
        <p className="text-[red] !mb-3">{errors.root.message}*</p>
      )}
      {success && (
        <h1 className="bg-[#A3C940] w-[max-content] p-3 rounded-md !mb-3 text-white">
          Message was sent successfully!
        </h1>
      )}
      <div className="grid grid-cols-2 gap-x-3">
        <TextInput
          {...contactObj.email}
          placeholder="Your Email..."
          type="email"
        />
        <TextInput {...contactObj.name} placeholder="Your name..." />
      </div>
      <Textarea {...contactObj.message} placeholder="Your message..." />
      <div className="grid grid-cols-2 gap-x-3">
        <Button
          loading={isSubmitting}
          className="!bg-[#A3C940] !h-[40px] !cursor-pointer"
        >
          Send!
        </Button>
      </div>
    </form>
  );
};
