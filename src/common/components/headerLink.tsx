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
            ? "border-b-3 border-orange-400 !text-white font-bold"
            : ""
        }  hover:!text-white`}
        href={href}
      >
        {title}
      </Link>
    </li>
  );
};
