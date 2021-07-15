import {authHost, refreshToken} from "./index";

interface Ivendor{name:string, description:string, email:string, image:string};
interface IvendorLocation{country:string, city:string, addressLine:string, vendorId:string};
interface Iname{name:string}

export const getSubCategoryAll = async (categoryId:string) =>{
    const data = await authHost.get(`/category/${categoryId}/sub_category`);
    return data;
};

export const postSubCategory = async ({name }:{name: string}, categoryId: string) =>{
    const data = await authHost.post(`/category/${categoryId}/sub_category` , {name});
    return data;
};

export const restSubCategory = async (subCategoryId:string, categoryId:string , {name}:Iname) =>{
    const data = await authHost.put(`/category/${categoryId}/sub_category/${subCategoryId}`, {name});
    return data;
};

export const getSubCategoryId = async (subCategoryId:string, categoryId:string ) =>{
    const data = await authHost.get(`/category/${categoryId}/sub_category/${subCategoryId}`);
    return data;
};

export const getDeletedSubCategory = async () =>{
    const data = await authHost.get(`/sub_category/?isDeleted=true`);
    return data;
};

export const deleteSubCategoryId = async (subCategoryId:string, categoryId:string) =>{
    const data = await authHost.delete(`/category/${categoryId}/sub_category/${subCategoryId}`);
    return data;
};



export const getCategoryAll = async ( ) =>{
    const data = await authHost.get("/category");
    return data;
};

export const getDeletedCategory = async () =>{
    const data = await authHost.get(`/category/?isDeleted=true`);
    return data;
};

export const restCategory = async (categoryId:string, {name}:Iname) =>{
    const data = await authHost.put(`/category/${categoryId}`,{name});
    return data;
};

export const getCategoryId = async (categoryId:string ) =>{
    const data = await authHost.get(`/category/${categoryId}`);
    return data;
};

export const postCategory = async ({name}:Iname) =>{
    const data = await authHost.post("/category", {name});
    // console.log(data)
    // data.status === 403 && refreshToken().then(resolve=>localStorage.setItem("token", resolve.token))
    
    return data;
};

export const deleteCategoryId = async (categoryId:string ) =>{
    const data = await authHost.delete(`/category/${categoryId}`);
    return data;
}



export const getVendorAll = async ( ) =>{
    const {data} = await authHost.get("/vendor");
    return data;

}

export const getDeletedVendor = async ( ) =>{
    const data = await authHost.get(`/vendor/?isDeleted=true`);
    return data;
};

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
export const uploadImage = async (fd: any) => {
    const data = await authHost.post(`/upload_image`, fd)
    return data;
}




export const getAllVendorLocation = async () =>{
    const data = await authHost.get(`/vendor/location`);
    return data;
}

export const getVendorLocation = async (vendorId:string) =>{
    const data = await authHost.get(`/vendor/${vendorId}/location`);
    return data;
}

export const getDeletedVendorLocation = async (  vendorid:string) =>{
    const data = await authHost.get(`/vendor/${vendorid}/location?isDeleted=true`);
    return data;
};

export const postVendorLocation = async ( {country, city, addressLine, vendorId}: IvendorLocation,) =>{
    const data = await authHost.post(`/vendor/${vendorId}/location`,{country, city, addressLine});
    return data;
}

export const getVendorLocationId = async (idLocation:string, idVendor: string) =>{
    const data = await authHost.get(`/vendor/${idVendor}/location/${idLocation}`);
    return data;
};

export const restVendorLocationId = async (idLocation:string, {country, city, addressLine}: IvendorLocation,vendorid:string ) =>{
    const data = await authHost.put(`/vendor/${vendorid}/location/${idLocation}`, {country, city, addressLine});
    return data;
};

export const deleteVendorLocationId = async (idLocation:string,vendorid: string ) =>{
    const data = await authHost.delete(`/vendor/${vendorid}/location/${idLocation}`);
    return data;
}