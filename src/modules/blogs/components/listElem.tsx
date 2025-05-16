import React, { FC } from "react";
import { IBlog } from "../types";
import { datePrettify, makeFilePath } from "@/common/utils";
import Link from "next/link";

export const BlogListElement: FC<{ blog: IBlog; isLast?: boolean }> = ({
  blog,
  isLast = false,
}) => {
  return (
    <Link
      href={`/news/${blog._id}`}
      className={`w-full flex items-end p-3 justify-between hover:bg-[#ced6e0] ${
        isLast ? "" : "border-b-1 border-[#ced6e0]"
      }`}
    >
      <div className="flex items-start">
        <img
          className="w-[150px] h-[90px] rounded-md object-cover"
          src={makeFilePath(blog.coverImage)}
          alt={blog.title}
        />
        <h1 className="!ml-[1rem] max-w-[400px]">
          <b>{blog.title}</b>
        </h1>
      </div>
      <div>
        <p>{datePrettify(blog.createdAt)}</p>
      </div>
    </Link>
  );
};
