import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../apis";
import { QUERIES } from "../../enums/queries.enum";

export const useGetProductsByCategories = (category: string) => {
  return useQuery({
    queryKey: [QUERIES.PRODUCT_BY_CATEGORY],
    queryFn: () => getProductsByCategory(category),
  });
};
