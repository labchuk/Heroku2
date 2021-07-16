import axios from "axios";

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true,  
});

const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    
});



authHost.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    
    if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/refresh_token`, {withCredentials: true})
            localStorage.setItem('token', response.data.token);
            return authHost.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
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