import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { CreateBlogDto } from "../types";
import { BlogsService } from "../services";
import { useRouter } from "next/navigation";

export const useCreateUpdateBlog = () => {
  const form = useForm<CreateBlogDto>();
  const router = useRouter();

  const blogObj = useMemo(() => {
    return {
      title: form.register("title"),
      content: form.register("content"),
    };
  }, [form]);

  const onSubmit = useCallback(
    async (data: CreateBlogDto) => {
      const response = await BlogsService.createBlog(data);
      if (response instanceof SuccessResponse) {
        router.push("/admin/blogs");
      } else if (response instanceof FailResponse) {
        form.setError("root", { message: response.message });
      }
    },
    [form, router]
  );

  return {
    blogObj,
    handleSubmit: form.handleSubmit(onSubmit),
    form
  };
};
