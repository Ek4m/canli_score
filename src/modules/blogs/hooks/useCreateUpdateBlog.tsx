import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { CreateBlogDto } from "../types";
import { BlogsService } from "../services";
import { useParams, useRouter } from "next/navigation";

export const useCreateUpdateBlog = () => {
  const params = useParams<{ id: string }>();
  const form = useForm<CreateBlogDto>();
  useEffect(() => {
    if (params.id) {
      BlogsService.getBlogById(params.id)
        .then((res) => {
          if (res instanceof SuccessResponse) {
            form.setValue("category", res.response.category);
            form.setValue("title", res.response.title);
            form.setValue("content", res.response.content);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [form, params]);

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
    form,
  };
};
