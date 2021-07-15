import {authHost, host} from "./index";
import jwt_decode from "jwt-decode";


export const login = async({email,password}:{ email: string, password:string }) =>{
    const {data} = await host.post("user/login", { email, password });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
}

export const getUserDetails = async ( id: string) =>{
    const {data} = await authHost.get(
        `user_details/${id}`);
    return data;
}



export const logout = async ({email,password}:{ email: string, password:string }) => {
    const response = await authHost.post("user/logout", { email, password });
    return response;
};

export const check = async () => {
    const {data}:{ data: any } = await authHost.get("");
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
}
