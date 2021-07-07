import React, {useEffect, useState} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {addCategory} from "../../../store/filtersStore";
import {
    deleteVendorId,
    getCategoryAll,
    getDeletedVendor,
    getVendorAll, getVendorLocationAll,
    postVendor,
    postVendorLocation,
    uploadImage,
} from "../../../http/filtersApi"

const MainPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        getCategoryAll().then(resolve=> dispatch(addCategory(resolve.data))).catch(f=> console.log(f))
    },[]);

 return (
        <div className={"homepage"}>
            <Layout />
        </div>
    );
};

export default MainPage;