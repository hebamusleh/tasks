import axios from "axios";
import { mapAxiosError } from "../utils";

export const getCategories = async () => {
  try {
    const res = await axios.get("/categories");
    return res.data;
  } catch (e) {
    throw mapAxiosError(e);
  }
};
