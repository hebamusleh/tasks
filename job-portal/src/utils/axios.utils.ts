import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["lang"] = "ar";

export const setAccessToken = (token: string) => {
  axios.defaults.headers.common["Authorization"] = token;
};
