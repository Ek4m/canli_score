import Axios from "axios";

const httpClient = Axios.create({
  baseURL: "https://canliscore.az/api",
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { httpClient };
