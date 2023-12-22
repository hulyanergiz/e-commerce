import axios from "axios";

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: {},
  });
};

export let AxiosInstance;

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
