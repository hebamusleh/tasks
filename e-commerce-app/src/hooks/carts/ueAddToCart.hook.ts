import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../../apis";
import type { IAddCartBody } from "../../models";

export const useAddToCart = () => {
  return useMutation({
    mutationFn: (body: IAddCartBody) => addToCart(body),
  });
};
