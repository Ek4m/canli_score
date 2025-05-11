"use client";
import React from "react";

import { Modal } from "./modal";
import { LoginForm } from "@/modules/auth/components";

export const LoginModal = () => {
  return (
    <>
      <Modal trigger={<div className="text-white cursor-pointer">Log in</div>}>
        <LoginForm />
      </Modal>
    </>
  );
};
