import {authHost} from "./index";
import jwt_decode from "jwt-decode";

interface Ivendor{name:string, description:string, email:string, image:string};
interface IvendorLocation{country:string,city:string,addressLine:string,vendorId:string};
interface Iname{name:string}

export const getSubCategoryAll = async ( ) =>{
    const data = await authHost.get("/sub_category");
    return data;
};

export const postSubCategory = async ({name}:Iname) =>{
    const data = await authHost.post("/sub_category", {name});
    return data;
};

export const restSubCategory = async (id:string, {name}:Iname ) =>{
    const data = await authHost.put(`/sub_category/${id}`, {name});
    return data;
};

export const getSubCategoryId = async (id:string ) =>{
    const data = await authHost.get(`/sub_category/${id}`);
    return data;
};

export const deleteSubCategoryId = async (id:string ) =>{
    const data = await authHost.delete(`/sub_category/${id}`);
    return data;
};



export const getCategoryAll = async ( ) =>{
    const data = await authHost.get("/category");
    return data;
};

export const restCategory = async (id:string, {name}:Iname) =>{
    const data = await authHost.put(`/category/${id}`);
    return data;
};

export const getCategoryId = async (id:string ) =>{
    const data = await authHost.get(`/category/${id}`);
    return data;
};

export const postCategory = async ({name}:Iname) =>{
    const data = await authHost.post("/category", {name});
    return data;
};

export const deleteCategoryId = async (id:string ) =>{
    const data = await authHost.delete(`/category/${id}`);
    return data;
}



export const getVendorAll = async ( ) =>{
    const {data} = await authHost.get("/vendor");
    return data;
}

export const postVendor = async ({name, description, email, image}: Ivendor ) =>{
    const data = await authHost.post("/vendor",{name, description, email, image});
    return data;
}

export const getVendorId = async (id:string ) =>{
    const data = await authHost.get(`/vendor/${id}`);
    return data;
};

export const restVendorId = async (id:string ,{name, description, email, image}: Ivendor) =>{
    const data = await authHost.put(`/vendor/${id}`,{name, description, email, image});
    return data;
};

export const deleteVendorId = async (id:string ) =>{
    const data = await authHost.delete(`/vendor/${id}`);
    return data;
}



export const getVendorLocationAll = async ( ) =>{
    const data = await authHost.get("/vendor/location");
    return data;
}

export const postVendorLocation = async ({country, city, addressLine, vendorId}: IvendorLocation) =>{
    const data = await authHost.post("/vendor/location",{country, city, addressLine, vendorId});
    return data;
}

export const getVendorLocationId = async (id:string, ) =>{
    const data = await authHost.get(`/vendor/location/${id}`);
    return data;
};

export const restVendorLocationId = async (id:string, {country, city, addressLine, vendorId}: IvendorLocation ) =>{
    const data = await authHost.put(`/vendor/location/${id}`, {country, city, addressLine, vendorId});
    return data;
};

export const deleteVendorLocationId = async (id:string ) =>{
    const data = await authHost.delete(`/vendor/location/${id}`);
    return data;
}