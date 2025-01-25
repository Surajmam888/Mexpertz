import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.BaseUrl,
});

export const AxiosPrivate = axios.create({
  baseURL: process.env.BaseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
