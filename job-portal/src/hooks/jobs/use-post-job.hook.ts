import { useMutation } from "@tanstack/react-query";
import { postJob } from "../../apis";
import type { IJobBody } from "../../types";

export const usePostJob = () => {
  return useMutation({
    mutationFn: (body: IJobBody) => postJob(body),
  });
};
