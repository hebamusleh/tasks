import { create } from "zustand";
import type { IJobBody } from "../types";

interface IJob extends IJobBody {
  id: string;
}
interface IJobStore {
  job: IJob;
  setJob: (job: Partial<IJobBody>) => void;
}

export const useJobStore = create<IJobStore>((set) => ({
  job: {
    id: "",
    category: "",
    company_name: "",
    description: "",
    experience: "",
    featured: "",
    location: "",
    salary: "",
    title: "",
    type: "",
    website: "",
  },
  setJob: (job) =>
    set((state) => ({
      job: { ...state.job, ...job },
    })),
}));
