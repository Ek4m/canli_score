"use client";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { Button } from "@radix-ui/themes";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { TextInput } from "@/common/components/form";
import { useResetPassword } from "../hooks";
import Link from "next/link";

export const ResetPasswordForm = () => {
  const { forgotPasswordRegisterObj, handleForgetPassword, state, step } =
    useResetPassword();

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID || ""}>
      <div className="max-w-[500px] !mt-2 !m-auto">
        {step === 0 ? (
          <div>
            <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center">
              Reset your password
            </h1>
            <h1 className="text-[red] !mb-2">{state.errors.root?.message}</h1>
            <form onSubmit={handleForgetPassword} className="w-full">
              <TextInput
                {...forgotPasswordRegisterObj.password}
                placeholder="Your new password..."
                type="password"
              />
              <p className="text-[#cacaca] !my-2">Enter your new password</p>
              <Button
                disabled={state.isLoading}
                type="submit"
                className="bg-black text-[#cacaca] w-full p-2 !mt-2 rounded-md cursor-pointer"
              >
                Submit!
              </Button>
            </form>
          </div>
        ) : null}
        {step === 1 ? (
          <div className="p-[2rem] flex flex-col items-center">
            <BsCheck color="white" size={70} />
            <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center !mt-6">
              SUCCESS
            </h1>
            <p className="text-[white] text-center">
              Your password was changed successfully!
            </p>
            <Link href="/auth/login">
              <Button className="!bg-black !mt-3 !border-1 !border-white !cursor-pointer">Back to log-in</Button>
            </Link>
          </div>
        ) : null}
      </div>
    </GoogleOAuthProvider>
  );
};
