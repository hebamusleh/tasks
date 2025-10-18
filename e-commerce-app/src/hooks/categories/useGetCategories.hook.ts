import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../apis";
import { QUERIES } from "../../enums/queries.enum";

export const useGetCategories = () => {
  return useQuery({
    queryKey: [QUERIES.CATEGORIES],
    queryFn: () => getCategories(),
  });
};
