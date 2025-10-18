import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../../apis";
import { QUERIES } from "../../enums";

export const useGetCart = () => {
  return useQuery({
    queryKey: [QUERIES.CART],
    queryFn: getCarts,
  });
};
