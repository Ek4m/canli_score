"use client";
import React from "react";

import { useGetBlogs } from "../hooks";
import { BlogListElement } from "./listElem";
import { AppSpinner } from "@/common/components";

export const BlogList = () => {
  const { data, isFetching } = useGetBlogs();
  return (
    <div className="w-full border-1 border-[#ced6e0] !mt-[2rem] rounded-lg ">
      <div className="p-3 w-full border-b-1 border-[#ced6e0]">
        <h1 className="font-bold text-lg">Xəbərlər</h1>
      </div>
      {isFetching && <AppSpinner />}
      {data?.map((e, index) => (
        <BlogListElement
          blog={e}
          key={e._id}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};
