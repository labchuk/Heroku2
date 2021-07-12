import {authHost} from "./index";

interface Idiscount{
    name: string;
    vendorId: string;
    fullDescription: string;
    isOnline:boolean;
    imageLink:string;
    startDate:string;
    endDate: string;
    subCategories: string[];
    locations: string[];
    categoryId: string;
    percent: number;
}

interface IdiscountFilter{
    page: number;
    size: number;
    vendorIds: string[];
    categoryId: string;
    country: string;
    city: string;
    searchWord: string;
    subCategoriesIds: string[];
}

export const postDiscount = async ( obj:Idiscount) =>{
    const data = await authHost.post(`/discount`, obj);
    return data;
};

export const getDiscountById = async ( idDiscount: string) =>{
    const data = await authHost.get(`/discount/${idDiscount}`);
    return data;
};

export const getDiscounts = async (obj:IdiscountFilter ) =>{
    const {page,size,vendorIds,categoryId,country,city,searchWord,subCategoriesIds} = obj;
    const arrObj = Object.entries(obj);
    const string = arrObj.reduce((previousValue, item) => {
        let str =``
        if(Array.isArray(item[1])){
          item[1].forEach(i =>{
            str +=`${item[0]}=${i}&`;
          })  
        }else{
           str += `${item[0]}=${item[1]}&`
        } 
        return previousValue += str;
    },`/discount/get_discounts?`);
    const data = await authHost.get(string.slice(0,string.length-1));
    return data;
};