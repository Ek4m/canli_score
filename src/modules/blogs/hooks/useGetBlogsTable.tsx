"use client";
import { useCallback, useMemo } from "react";
import { IBlog } from "../types";
import { BlogsService } from "../services";
import { SuccessResponse } from "@/common/config/response";
import { ColumnDef } from "@tanstack/react-table";
import { datePrettify } from "@/common/utils";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export const useGetBlogsTable = () => {
  const fetchData = useCallback<() => Promise<IBlog[]>>(async () => {
    const data = await BlogsService.getBlogs();
    if (data instanceof SuccessResponse) return data.response;
    return [];
  }, []);

  const columns = useMemo<ColumnDef<IBlog>[]>(() => {
    return [
      {
        accessorKey: "_id",
        header: "ID",
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "createdAt",
        header: "Title",
        cell: ({ getValue }) => datePrettify(getValue() as string),
      },
      {
        accessorKey: "updatedAt",
        header: "Options",
        cell: ({ row }) => {
          return (
            <Link href={"/admin/blogs/" + row.original._id}>
              <Button>Update</Button>
            </Link>
          );
        },
      },
    ];
  }, []);

  return { fetchData, columns };
};
