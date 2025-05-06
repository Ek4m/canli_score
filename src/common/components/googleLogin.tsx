import { Button } from "@headlessui/react";
import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { ImGoogle2 } from "react-icons/im";

export const GoogleLogin = () => {
  const login = useGoogleLogin({
    onSuccess: (credential) => {
      console.log("SUCESS", credential);
    },
    onError: () => {
      console.log("__ERROR");
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
