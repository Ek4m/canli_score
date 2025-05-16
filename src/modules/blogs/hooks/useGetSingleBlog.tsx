import { useQuery } from "@tanstack/react-query";

import { BlogsService } from "../services";
import { SuccessResponse } from "@/common/config/response";

export const useGetBlogById = (id: string) =>
  useQuery({
    queryKey: ["getblogbyid", id],
    queryFn: async () => {
      const result = await BlogsService.getBlogById(id);
      if (result instanceof SuccessResponse) return result.response;
    },
  });
