import { useMutation } from "@tanstack/react-query";
import { updateJob } from "../../apis";
import type { IJobBody } from "../../types";

export const useUpdateJob = () => {
  return useMutation({
    mutationFn: ({ id, body }: { id: string; body: IJobBody }) =>
      updateJob({
        id,
        body,
      }),
  });
};
