import { httpClient } from "@/common/config/httpClient";
import { FailResponse, SuccessResponse } from "@/common/config/response";
import { CreateBlogDto, IBlog } from "../types";

export class BlogsService {
  static async getBlogs(): Promise<SuccessResponse<IBlog[]> | FailResponse> {
    try {
      const res = await httpClient.get("/blogs");
      return new SuccessResponse(res.data);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }

  static async createBlog(
    body: CreateBlogDto
  ): Promise<SuccessResponse<IBlog[]> | FailResponse> {
    try {
      const res = await httpClient.post("/blogs", body);
      return new SuccessResponse(res.data);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
}
