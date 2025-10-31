import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../apis";
import { QUERIES } from "../../enum";

export const useGetJobs = () => {
  return useQuery({
    queryKey: [QUERIES.JOBS],
    queryFn: getJobs,
  });
};
