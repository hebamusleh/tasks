import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../apis";
import { QUERIES } from "../../enums/queries.enum";
import type { IProductsParams } from "../../models";

export const useGetProduct = (body: IProductsParams) => {
  return useQuery({
    queryKey: [QUERIES.PRODUCTS, body],
    queryFn: () => getProducts(body),
  });
};
