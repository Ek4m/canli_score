import { FailResponse, SuccessResponse } from "@/common/config/response";
import {
  ICountry,
  ILeague,
  ILeagueTableMatch,
  ILiveLeague,
  IMatchEvent,
} from "../types";
import { httpClient } from "@/common/config/httpClient";

export class ScoresService {
  static async getCountries(): Promise<
    SuccessResponse<ICountry[]> | FailResponse
  > {
    try {
      const response = await httpClient.get("/countries");
      const result = response.data.filter((e: ICountry) => !!e.national_team);
      return new SuccessResponse(result);
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
      const result = response.data
        .filter(
          (e: ILiveLeague) =>
            !!e && e.matches.some((m) => m.status === "IN PLAY")
        )
        .map((e: ILiveLeague) => ({
          ...e,
          matches: e.matches.filter((match) => match.status === "IN PLAY"),
        }));
      return new SuccessResponse(result);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
  static async getLeagueMatchesByDate(
    date: string
  ): Promise<SuccessResponse<ILiveLeague[]> | FailResponse> {
    try {
      const response = await httpClient.get("/fixtures?date=" + date);
      const result = response.data.grouped;
      return new SuccessResponse(result);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
  static async getMatchesByLeague(id: string): Promise<
    | SuccessResponse<{
        pastFixture: ILiveLeague[];
        futureFixture: ILiveLeague[];
      }>
    | FailResponse
  > {
    try {
      const response = await httpClient.get(
        "/competitions/fixtures?competition_id=" + id
      );
      const result = response.data;
      return new SuccessResponse(result);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
  static async getLeagueTable(
    id: string
  ): Promise<SuccessResponse<ILeagueTableMatch[]> | FailResponse> {
    try {
      const response = await httpClient.get(
        "/leagues/table?competition_id=" + id
      );
      const result = response.data;
      return new SuccessResponse(result);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
  static async getMatchEvents(
    id: string
  ): Promise<SuccessResponse<IMatchEvent> | FailResponse> {
    try {
      const response = await httpClient.get("/match/event?match_id=" + id);
      const result = response.data;
      return new SuccessResponse(result);
    } catch (error) {
      console.log(error);
      return new FailResponse("Something went wrong");
    }
  }
}
