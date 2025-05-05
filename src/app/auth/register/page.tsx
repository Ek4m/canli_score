import { RegisterForm } from "@/modules/auth/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return (
    <div className="w-full">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
