import axios from 'axios';
import { ACCESS_TOKEN } from './token';


const isDevelopment = import.meta.env.MODE === "development";

const myBaseUrl = isDevelopment
  ? import.meta.env.VITE_API_URL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;


const api = axios.create({
  baseURL: myBaseUrl,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
  
);

export default api;