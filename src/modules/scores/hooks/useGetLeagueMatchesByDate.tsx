import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import { ScoresService } from "../services";
import { SuccessResponse } from "@/common/config/response";

export const useGetLeagueMatchesByDate = (date: Date) =>
  useQuery({
    queryFn: async () => {
      const title = format(date, "yyyy-MM-dd");
      const response = await ScoresService.getLeagueMatchesByDate(title);
      if (response instanceof SuccessResponse) return response.response;
      return [];
    },
    queryKey: ["leaguematchesbydate", date],
  });
