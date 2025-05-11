import { useQuery } from "@tanstack/react-query";
import { ScoresService } from "../services";
import { SuccessResponse } from "@/common/config/response";

export const useGetLeaguesByCountry = (id: string) =>
  useQuery({
    queryFn: async () => {
      const response = await ScoresService.getLeaguesByCountry(id);
      if (response instanceof SuccessResponse) return response.response;
      return [];
    },
    queryKey: ["countries", id],
    staleTime: 1000 * 3600 * 30,
    enabled: !!id,
  });
