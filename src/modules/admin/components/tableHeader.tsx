"use client";
import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

export const TableHeader: FC<
  PropsWithChildren<{ addHref: string; title: string }>
> = ({ addHref, children, title }) => {
  return (
    <div className="bg-white p-2 rounded-md !mt-3">
      <div className="flex items-center">
        <Link href={addHref}>
          <Button>+Add</Button>
        </Link>
        <h1 className="text-lg !ml-2 font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
};
