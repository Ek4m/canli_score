import React from "react";
import { Metadata } from "next";
import { ForgotPasswordForm } from "@/modules/auth/components";

export const metadata: Metadata = {
  title: "Reset your password",
};

const ForgotPasswordPage = () => {
  return (
    <div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
