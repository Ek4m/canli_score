"use client";
import React, { useContext } from "react";
import { ImGoogle2 } from "react-icons/im";
import { Button } from "@radix-ui/themes";
import { useGoogleLogin } from "@react-oauth/google";

import { AuthService } from "@/modules/auth/services";
import { SuccessResponse } from "../config/response";
import { AuthContext } from "@/modules/auth/contexts";

export const GoogleLogin = () => {
  const { refetch } = useContext(AuthContext);
  const login = useGoogleLogin({
    onSuccess: async (credential) => {
      const result = await AuthService.googleLogin(credential);
      if (result instanceof SuccessResponse) {
        refetch();
      }
    },
  });
  return (
    <Button
      onClick={() => login()}
      className="bg-black text-[#cacaca] w-full p-2 !mt-2 rounded-md cursor-pointer flex items-center justify-center"
    >
      <ImGoogle2 size={30} color="white" />
      <p className="!ml-2">Continue with Google</p>
    </Button>
  );
};
