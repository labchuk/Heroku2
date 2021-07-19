import React, {useEffect} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {addCategory, addVendor, addVendorLocation, } from "../../../store/filtersStore";
import {
    getCategoryAll,
    getVendorAll,
    postSubCategory,
    getAllVendorLocation,
    getSubCategoryAll, getVendorLocation
} from "../../../http/filtersApi"
const MainPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        getCategoryAll().then(resolve=>{dispatch(addCategory(resolve.data)); console.log(resolve)}).catch(f=> console.log(f))
        getAllVendorLocation().then(resolve =>{dispatch(addVendorLocation(resolve.data)); console.log(resolve) } ).catch(f=> console.log(f))
        getVendorAll().then(resolve=> {dispatch(addVendor(resolve));console.log(resolve)})
       // postSubCategory({name:"Fish"},"081d305e-3a10-4f1f-9a14-80e44ff4eca9").then(resolve=> {console.log(resolve) })
       // getCategoryAll().then(resolve => console.log(resolve))
       // getSubCategoryAll("081d305e-3a10-4f1f-9a14-80e44ff4eca9").then(resolve => console.log(resolve))
       // getVendorLocation("6a0dce89-878a-4623-88c0-c6d410c0690f").then(resolve => console.log(resolve.data.content) )
        // postVendorLocation({country: "Ukrain", city: "Kiev", addressLine: "Danylevskogo st." , vendorId:"8c3d7cb5-151c-4b02-b9ef-2c122bf42a28"}, "8c3d7cb5-151c-4b02-b9ef-2c122bf42a28").then(resolve => console.log(resolve) )
        // getAllVendorLocation().then(resolve=> dispatch(addVendorLocation(resolve.data))).catch(f=> console.log(f))
    },[MainPage]);
 return (
        <div className={"homepage"}>

            <Layout />
        </div>
    );
};

export default MainPage;