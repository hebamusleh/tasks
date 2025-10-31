import axios from "axios";
import type { IJobBody } from "../types";
import { mapAxiosError } from "../utils";

export const getJobs = async () => {
  try {
    const res = await axios.get("/jobs");
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};

export const getJobDetails = async (id: string) => {
  try {
    const res = await axios.get(`/jobs/${id}`);
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};

export const postJob = async (body: IJobBody) => {
  try {
    const res = await axios.post("/jobs", body);
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};
export const updateJob = async ({
  id,
  body,
}: {
  id: string;
  body: IJobBody;
}) => {
  try {
    const res = await axios.put("/jobs", { id, body });
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};
export const deleteJob = async (id: string) => {
  try {
    const res = await axios.delete(`/jobs/${id}`);
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};
