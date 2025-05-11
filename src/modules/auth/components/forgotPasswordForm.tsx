"use client";
import React from "react";
import { IoMailUnread } from "react-icons/io5";
import { Button } from "@radix-ui/themes";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { TextInput } from "@/common/components/form";
import { useForgotPassword } from "../hooks";

export const ForgotPasswordForm = () => {
  const { forgotPasswordRegisterObj, handleForgetPassword, state, step } =
    useForgotPassword();
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID || ""}>
      <div className="max-w-[500px] !mt-2 !m-auto">
        {step === 0 ? (
          <div>
            <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center">
              Enter your email
            </h1>
            <h1 className="text-[red] !mb-2">{state.errors.root?.message}</h1>
            <form onSubmit={handleForgetPassword} className="w-full">
              <TextInput
                {...forgotPasswordRegisterObj.email}
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
        {step === 1 ? (
          <div className="p-[2rem] flex flex-col items-center">
            <IoMailUnread color="white" size={50} />
            <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center !mt-6">
              Verification code sent
            </h1>
            <p className="text-[white] text-center">
              A link to reset your password has been sent to your email.
            </p>
          </div>
        ) : null}
      </div>
    </GoogleOAuthProvider>
  );
};
