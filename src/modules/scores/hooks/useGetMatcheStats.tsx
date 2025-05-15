import { useQuery } from "@tanstack/react-query";
import { ScoresService } from "../services";
import { SuccessResponse } from "@/common/config/response";

export const useGetMatchStats = (id: string) =>
  useQuery({
    queryFn: async () => {
      const response = await ScoresService.getMatchStats(id);
      if (response instanceof SuccessResponse) return response.response;
      return undefined;
    },
    queryKey: ["matchstats", id],
    staleTime: 1000 * 3600 * 30,
    enabled: !!id,
  });
