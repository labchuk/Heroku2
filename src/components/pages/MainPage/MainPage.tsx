import React, {useEffect} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {addCategory, addVendor, addVendorLocation} from "../../../store/filtersStore";
import {getCategoryAll, postSubCategory,getVendorLocationAll, deleteCategoryId, getDeletedCategory, restCategory, getCategoryId, getVendorAll } from "../../../http/filtersApi"

const MainPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        getCategoryAll().then(resolve=> dispatch(addCategory(resolve.data)));
        getVendorAll().then(resolve =>dispatch(addVendor(resolve)))
        getVendorLocationAll().then(resolve=> dispatch(addVendorLocation(resolve.data))).catch(f=> console.log(f))
    },[]);

 return (
        <div className={"homepage"}>

            <Layout />
        </div>
    );
};

export default MainPage;