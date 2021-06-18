import {authHost} from "./index";


export const login = async({email, password}) =>{
    const response = await authHost.post("user/login", { email, password });
    
    return response;
}

export const logout = async ({ email, password }) => {
    const response = await authHost.post("user/logout", { email, password });
    
    return response;
};

