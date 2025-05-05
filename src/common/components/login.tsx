"use client";
import React, { useState } from "react";

import { Modal } from "./modal";
import { LoginForm } from "@/modules/auth/components";

export const LoginModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="text-white cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Log in
      </button>
      <Modal open={open} setOpen={setOpen}>
        <LoginForm />
      </Modal>
    </>
  );
};
