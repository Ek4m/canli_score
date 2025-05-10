"use client";
import React, { useMemo } from "react";
import { Button } from "@radix-ui/themes";

import { TextInput } from "@/common/components/form";
import { RichTextEditor } from "@/common/components";
import { useCreateUpdateBlog } from "../hooks";
import { AppSelect } from "@/common/components/select";

export const CreateBlogForm = () => {
  const { blogObj, handleSubmit, form } = useCreateUpdateBlog();

  const values = form.getValues();

  const categories = useMemo(
    () => [
      {
        value: "Sports",
        title: "Sports",
      },
    ],
    []
  );
  console.log(values);
  return (
    <div className="max-w-[500px] !mt-2 !m-auto bg-white p-2">
      <h1 className="uppercase font-semibold text-white text-xl !mb-3 !text-center">
        Create Blog
      </h1>
      <h1 className="text-[red] !mb-2">
        {form.formState.errors.root?.message}
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <TextInput {...blogObj.title} placeholder="Title..." type="text" />
        <RichTextEditor
          value={values.content}
          onEditorChange={(val) => form.setValue("content", val)}
          placeholder="Add content"
        />
        <AppSelect
          placeholder="Select category..."
          options={categories}
          value={values.category}
          onChange={(val) => form.setValue("category", val)}
        />
        <Button
          disabled={form.formState.isLoading}
          loading={form.formState.isLoading}
          type="submit"
          className="bg-black !w-full text-[#cacaca] w-full p-2 !mt-2 rounded-md cursor-pointer"
        >
          Submit!
        </Button>
      </form>
      <br />
    </div>
  );
};
