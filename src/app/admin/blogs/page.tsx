"use client";
import React, { useEffect } from "react";
import { AppTable, TableHeader } from "@/modules/admin/components";
import { useGetBlogsTable } from "@/modules/blogs/hooks";

const AdminBlogsPage = () => {
  const { columns, fetchData } = useGetBlogsTable();
  useEffect(() => {
    document.title = "Admin | Blogs";
  }, []);
  return (
    <>
      <TableHeader addHref="/admin/blogs/create" title="Blogs" />
      <AppTable columns={columns} fetchData={fetchData} />
    </>
  );
};

export default AdminBlogsPage;
