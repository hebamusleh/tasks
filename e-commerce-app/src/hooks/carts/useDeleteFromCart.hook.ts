import { useMutation } from "@tanstack/react-query";
import { removeFromCart } from "../../apis";

export const useDeleteFromCart = () => {
  return useMutation({
    mutationFn: (id: number) => removeFromCart(id),
  });
};
