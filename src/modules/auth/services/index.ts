import { httpClient } from "@/common/config/httpClient";
import { LoginDto, RegisterDto } from "../login/types";
import { FailResponse, SuccessResponse } from "@/common/config/response";
import { isAxiosError } from "axios";
import { IUser } from "../types/interfaces";

export class AuthService {
  static async login(
    body: LoginDto
  ): Promise<FailResponse | SuccessResponse<IUser>> {
    try {
      const response = await httpClient.post("/user/login", body);
      const { token, user } = response.data;
      localStorage.setItem("access_token", token);
      return new SuccessResponse(user);
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
  static async register(
    body: RegisterDto
  ): Promise<FailResponse | SuccessResponse<boolean>> {
    try {
      await httpClient.post("/user/register", body);
      return new SuccessResponse(true);
    } catch (error) {
      if (isAxiosError(error)) {
        return new FailResponse(error?.response?.data.message);
      } else {
        return new FailResponse("Something went wrong");
      }
    }
  }
  static async getMe(): Promise<FailResponse | SuccessResponse<IUser>> {
    try {
      const response = await httpClient.get("/user/me");
      return new SuccessResponse(response.data);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
}
