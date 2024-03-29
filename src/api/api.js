import axios from "axios";

export const createAxiosInstance = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token
    ? axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com",
        headers: { Authorization: token },
      })
    : axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com",
        headers: {},
      });
};

export let AxiosInstance;

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
