import Axios from "axios";
import { API_URL } from "../constants/globals";

const httpClient = Axios.create({
  baseURL: `${API_URL}/api`,
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { httpClient };
