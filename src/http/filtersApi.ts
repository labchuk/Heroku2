import {authHost} from "./index";
import jwt_decode from "jwt-decode";

export const getSubCategory = async ( ) =>{
    const {data} = await authHost.get("/tag");
    return data;
}