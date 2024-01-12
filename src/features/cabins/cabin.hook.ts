import { useQuery } from "@tanstack/react-query";
import cabinService from "../../services/cabin.service";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: cabinService.list,
  });

  return { isLoading, error, cabins };
}
