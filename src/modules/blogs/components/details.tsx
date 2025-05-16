"use client";
import React, { useEffect, useMemo } from "react";
import { useGetBlogById } from "../hooks";
import { useParams } from "next/navigation";
import { AppSpinner } from "@/common/components";
import { datePrettify } from "@/common/utils";

export const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useGetBlogById(id);

  useEffect(() => {
    if (data) {
      document.title = data.title;
    }
  }, [data]);

  const content = useMemo(() => {
    if (data) {
      const result = data.content.replaceAll(`\\n`, "<br />");
      console.log(result);
      return result;
    }
    return "";
  }, [data]);

  return (
    <div className="w-full border-1 border-[#ced6e0] p-[2rem] rounded-md !mt-[2rem]">
      {isFetching && <AppSpinner />}
      {data && (
        <div className="">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <div className="!mb-2 !mt-2 text-[#57606f]">
            {datePrettify(data.createdAt)}
          </div>
          <hr className="border-[#a4b0be]" />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      )}
    </div>
  );
};
