import { useQuery } from "@tanstack/react-query";

import { BlogsService } from "../services";
import { SuccessResponse } from "@/common/config/response";

export const useGetBlogs = () =>
  useQuery({
    queryKey: ["getblogs"],
    queryFn: async () => {
      const result = await BlogsService.getBlogs();
      if (result instanceof SuccessResponse) return result.response;
      return [];
    },
  });
