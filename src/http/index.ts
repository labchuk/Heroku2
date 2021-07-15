import axios from "axios";

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const refreshToken = async() => {
    const response = await host.post("/refresh_token");
    return response;
}


authHost.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const {data}  = await refreshToken();            
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
    return authHost(originalRequest);
  }
  return Promise.reject(error);
});

const authInterceptor = (config: any) => {
    config.headers.Authorization = `${localStorage.getItem("token")}`;
    return config;
}

authHost.interceptors.request.use(authInterceptor);

export {
    authHost,
    host
}