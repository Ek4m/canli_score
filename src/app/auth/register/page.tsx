import React from "react";
import { Metadata } from "next";

import { RegisterForm } from "@/modules/auth/components";

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
