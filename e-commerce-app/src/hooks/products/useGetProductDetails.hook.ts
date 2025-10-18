import { useQuery } from "@tanstack/react-query";
import { getProductsDetails } from "../../apis";
import { QUERIES } from "../../enums/queries.enum";

export const useGetProductDetails = (id: number) => {
  return useQuery({
    queryKey: [QUERIES.PRODUCTS, id],
    queryFn: () => getProductsDetails(id),
  });
};
