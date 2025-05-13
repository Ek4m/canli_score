import { useQuery } from "@tanstack/react-query";
import { ScoresService } from "../services";
import { SuccessResponse } from "@/common/config/response";

export const useGetLeagueTable = (id: string) =>
  useQuery({
    queryFn: async () => {
      const response = await ScoresService.getLeagueTable(id);
      if (response instanceof SuccessResponse) return response.response;
      return [];
    },
    queryKey: ["leaguetable", id],
    staleTime: 1000 * 3600 * 30,
    enabled: !!id,
  });
