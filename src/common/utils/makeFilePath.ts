import { API_URL } from "../constants/globals";

export const makeFilePath = (path: string) => {
  return API_URL + path;
};
