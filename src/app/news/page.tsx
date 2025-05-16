import { BlogList } from "@/modules/blogs/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Xəbərlər",
};

const NewsPage = () => {
  return <div>
    <BlogList />
  </div>;
};
export default NewsPage;
