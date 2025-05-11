import { FailResponse, SuccessResponse } from "@/common/config/response";
import { ICountry, ILeague, ILiveLeague } from "../types";
import { httpClient } from "@/common/config/httpClient";

export class ScoresService {
  static async getCountries(): Promise<
    SuccessResponse<ICountry[]> | FailResponse
  > {
    try {
      const response = await httpClient.get("/countries");
      return new SuccessResponse(response.data);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }

  static async getLeaguesByCountry(
    id: string
  ): Promise<SuccessResponse<ILeague[]> | FailResponse> {
    try {
      const response = await httpClient.get("/competitions?country_id=" + id);
      return new SuccessResponse(response.data);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
  static async getLiveMatches(): Promise<
    SuccessResponse<ILiveLeague[]> | FailResponse
  > {
    try {
      const response = await httpClient.get("/live");
      return new SuccessResponse(response.data.filter((e: ILiveLeague) => !!e));
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
}
