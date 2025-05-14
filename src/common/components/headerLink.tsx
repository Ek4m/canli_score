"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface HeaderLinkProps {
  title: string;
  href: string;
}

export const HeaderLink: FC<HeaderLinkProps> = ({ title, href }) => {
  const pathname = usePathname();
  return (
    <li className="!mr-4">
      <Link
        className={`!text-[#cacaca] pb-1 ${
          pathname.startsWith(href)
            ? "!text-white font-bold bg-[#A3C940] p-1 rounded-xs"
            : ""
        }  hover:!text-white hover:border-b-1 hover:border-[#A3C940]`}
        href={href}
      >
        {title}
      </Link>
    </li>
  );
};
