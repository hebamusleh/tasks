import { useQuery } from "@tanstack/react-query";
import { getJobDetails } from "../../apis";
import { QUERIES } from "../../enum";

export const useGetJobDetails = (id: string) => {
  return useQuery({
    queryKey: [QUERIES.JOBS, id],
    queryFn: () => getJobDetails(id),
    enabled: !!id,
  });
};
