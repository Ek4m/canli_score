import { useQuery } from "@tanstack/react-query";
import { ScoresService } from "../services";
import { SuccessResponse } from "@/common/config/response";

export const useGetCountries = () =>
  useQuery({
    queryFn: async () => {
      const response = await ScoresService.getCountries();
      if (response instanceof SuccessResponse) return response.response;
      return [];
    },
    queryKey: ["countries"],
    staleTime: 1000 * 3600 * 30,
  });
