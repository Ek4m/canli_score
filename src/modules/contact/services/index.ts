import { httpClient } from "@/common/config/httpClient";
import { ContactFormDto } from "../types";
import { FailResponse, SuccessResponse } from "@/common/config/response";
import { isAxiosError } from "axios";

export class ContactService {
  static async sendContactForm(data: ContactFormDto) {
    try {
      await httpClient.post("/contact", data);
      return new SuccessResponse(true);
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        return new FailResponse(error.response?.data.message);
      } else {
        return new FailResponse("Something went wrong");
      }
    }
  }
}
