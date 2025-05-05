import React from "react";
import { Metadata } from "next";

import { LoginForm } from "@/modules/auth/components";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <div className="w-full">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
