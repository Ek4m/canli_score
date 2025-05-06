"use client";
import React, { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { MdExitToApp } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import { LoginModal } from "./login";
import { AuthContext } from "@/modules/auth/contexts";
import { DropdownMenu } from "@radix-ui/themes";

export const ProfileIndicator = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="focus:outline-none">
        <FaCircleUser className="cursor-pointer" color="white" size={30} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="!bg-black">
        <DropdownMenu.Item>
          <Link className="flex items-center text-white" href="/profile">
            <FiEdit size={15} className="!mr-1" />
            Edit Profile
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link className="text-[red] flex items-center" href="/logout">
            <MdExitToApp color="red" size={18} className="!mr-1" />
            Log out
          </Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ) : (
    <LoginModal />
  );
};
