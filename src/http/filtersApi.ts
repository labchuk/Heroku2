import {authHost} from "./index";

interface Ivendor{name:string, description:string, email:string, image:string};
interface IvendorLocation{country:string, city:string, addressLine:string, vendorId:string};
interface Iname{name:string}

export const getSubCategoryAll = async ( ) =>{
    const data = await authHost.get("/sub_category");
    return data;
};

export const postSubCategory = async ({name}:Iname) =>{
    const data = await authHost.post("/sub_category", {name});
    return data;
};

export const restSubCategory = async (SubCategory:string, {name}:Iname ) =>{
    const data = await authHost.put(`/sub_category/${SubCategory}`, {name});
    return data;
};

export const getSubCategoryId = async (SubCategory:string ) =>{
    const data = await authHost.get(`/sub_category/${SubCategory}`);
    return data;
};

export const deleteSubCategoryId = async (SubCategory:string ) =>{
    const data = await authHost.delete(`/sub_category/${SubCategory}`);
    return data;
};



export const getCategoryAll = async ( ) =>{
    const data = await authHost.get("/category");
    return data;
};

export const restCategory = async (idCategore:string, {name}:Iname) =>{
    const data = await authHost.put(`/category/${idCategore}`);
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

export const deleteCategoryId = async (idCategore:string ) =>{
    const data = await authHost.delete(`/category/${idCategore}`);
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

export const getVendorId = async (idVendor:string ) =>{
    const data = await authHost.get(`/vendor/${idVendor}`);
    return data;
};

export const restVendorId = async (idVendor:string ,{name, description, email, image}: Ivendor) =>{
    const data = await authHost.put(`/vendor/${idVendor}`,{name, description, email, image});
    return data;
};

export const deleteVendorId = async (idVendor:string ) =>{
    const data = await authHost.delete(`/vendor/${idVendor}`);
    return data;
}



export const getVendorLocationAll = async ( ) =>{
    const data = await authHost.get("/vendor/location");
    return data;
}

export const postVendorLocation = async ( {country, city, addressLine, vendorId}: IvendorLocation) =>{
    const data = await authHost.post(`/vendor/location/`,{country, city, addressLine, vendorId});
    return data;
}

export const getVendorLocationId = async (idLocation:string, ) =>{
    const data = await authHost.get(`/vendor/location/${idLocation}`);
    return data;
};

export const restVendorLocationId = async (idLocation:string, {country, city, addressLine, vendorId}: IvendorLocation ) =>{
    const data = await authHost.put(`/vendor/location/${idLocation}`, {country, city, addressLine, vendorId});
    return data;
};

export const deleteVendorLocationId = async (idLocation:string ) =>{
    const data = await authHost.delete(`/vendor/location/${idLocation}`);
    return data;
}