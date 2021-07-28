import axios from "axios";
import {API_URL} from "../config";

const authHost = axios.create({
    baseURL: API_URL,
    // withCredentials: true,  
});

const host = axios.create({
    baseURL: API_URL,
    
});



authHost.interceptors.response.use((config) => {
    return config;
    },async (error) => {
        const originalRequest = error.config;
        if (error?.response?.status === 401 && error.config && !error.config._isRetry ) {
            originalRequest._isRetry = true;
            try {
                const response = await host.post(`user/refresh_token`, {withCredentials: true,})
                localStorage.setItem('token', response.data.token);
                return authHost.request(originalRequest);
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН');
                localStorage.removeItem("token"); 
                 
            }
        }
    throw error;
})


const authInterceptor = (config: any) => {
    config.headers.Authorization = `${localStorage.getItem("token")}`;
    return config;
}

authHost.interceptors.request.use(authInterceptor);

export {
    authHost,
    host
}