import { FailResponse, SuccessResponse } from "@/common/config/response";
import { ProfileDto } from "../types";
import { httpClient } from "@/common/config/httpClient";
import { isAxiosError } from "axios";

export class ProfileService {
  static async update(
    body: ProfileDto
  ): Promise<FailResponse | SuccessResponse<boolean>> {
    try {
      await httpClient.put("/user/update", body);
      return new SuccessResponse(true);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 401 || error.response?.status === 400) {
          return new FailResponse(error?.response?.data.message);
        }
        return new FailResponse("Something went wrong");
      } else {
        return new FailResponse("Something went wrong");
      }
    }
  }
}
