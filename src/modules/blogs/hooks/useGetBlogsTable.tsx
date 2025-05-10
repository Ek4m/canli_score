import { useCallback, useMemo } from "react";
import { IBlog } from "../types";
import { BlogsService } from "../services";
import { SuccessResponse } from "@/common/config/response";
import { ColumnDef } from "@tanstack/react-table";
import { datePrettify } from "@/common/utils";

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
    ];
  }, []);

  return { fetchData, columns };
};
