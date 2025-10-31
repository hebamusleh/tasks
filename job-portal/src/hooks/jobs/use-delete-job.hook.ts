import { useMutation } from "@tanstack/react-query";
import { deleteJob } from "../../apis";

export const useDeleteJob = () => {
  return useMutation({
    mutationFn: (id: string) => deleteJob(id),
  });
};
