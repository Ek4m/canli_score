"use client";
import React from "react";

import { Modal } from "./modal";
import { LoginForm } from "@/modules/auth/components";

export const LoginModal = () => {
  return (
    <>
      <button className="text-white cursor-pointer">Log in</button>
      <Modal>
        <LoginForm />
      </Modal>
    </>
  );
};
