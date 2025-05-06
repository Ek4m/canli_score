"use client";
import React from "react";
import { Button } from "@headlessui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { TextInput } from "@/common/components/form";
import { useForgotPassword } from "../hooks";

export const ForgotPasswordForm = () => {
  const { loginRegisterObj, handleForgetPassword, state, step } =
    useForgotPassword();

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID || ""}>
      <div className="max-w-[500px] !mt-2 !m-auto">
        {step === 1 ? (
          <div>
            <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center">
              Enter your email
            </h1>
            <h1 className="text-[red] !mb-2">{state.errors.root?.message}</h1>
            <form onSubmit={handleForgetPassword} className="w-full">
              <TextInput
                {...loginRegisterObj.email}
                placeholder="Your Email..."
                type="email"
              />
              <p className="text-[#cacaca] !my-2">
                Enter your email address and we’ll send you a link to reset your
                password.
              </p>
              <Button
                disabled={state.isLoading}
                type="submit"
                className="bg-black text-[#cacaca] w-full p-2 !mt-2 rounded-md cursor-pointer"
              >
                Send code!
              </Button>
            </form>
          </div>
        ) : null}
        {step === 2 ? (
          <div>
            <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center">
              Reset your password
            </h1>
            <h1 className="text-[red] !mb-2">{state.errors.root?.message}</h1>
            <form onSubmit={handleForgetPassword} className="w-full">
              <TextInput
                {...loginRegisterObj.token}
                placeholder="Code..."
                type="text"
              />
              <TextInput
                {...loginRegisterObj.password}
                placeholder="New password..."
                type="password"
              />
              <p className="text-[#cacaca] !my-2">
                Set a new password for your account below.
              </p>
              <p>{state.dirtyFields.email}</p>
              <Button
                disabled={state.isLoading}
                type="submit"
                className="bg-black text-[#cacaca] w-full p-2 !mt-2 rounded-md cursor-pointer"
              >
                Send code!
              </Button>
            </form>
          </div>
        ) : null}
      </div>
    </GoogleOAuthProvider>
  );
};
