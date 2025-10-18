import { useMutation } from "@tanstack/react-query";
import { updateCart } from "../../apis";
import type { IUpdateCart } from "../../models";

export const useUpdateCart = () => {
  return useMutation({
    mutationFn: ({ id, body }: { id: number; body: IUpdateCart }) =>
      updateCart({
        id,
        body,
      }),
  });
};
