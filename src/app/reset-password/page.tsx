import React from "react";
import { Metadata } from "next";
import { ResetPasswordForm } from "@/modules/auth/components";

export const metadata: Metadata = {
  title: "Reset your password",
};

const ResetPasswordPage = () => {
  return (
    <div>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPasswordPage;
