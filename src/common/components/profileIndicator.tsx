"use client";
import React, { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
import Link from "next/link";

import { LoginModal } from "./login";
import { AuthContext } from "@/modules/auth/contexts";

export const ProfileIndicator = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Link href="/profile">
      <FaCircleUser color="white" size={30} />
    </Link>
  ) : (
    <LoginModal />
  );
};
