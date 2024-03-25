import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-blog-backend-bice-seven.vercel.app",
});

// проверка авторизован ли пользователь
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
