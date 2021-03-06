import React, {useEffect} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch, } from "../../../store/Redux-toolkit-hook";
import {addCategory, addVendor, addVendorLocation, } from "../../../store/filtersStore";
import {getCategoryAll,getVendorAll,getAllVendorLocation,} from "../../../http/filtersApi"
import { resetUserState } from "../../../store/userSlise";
import {resetFilteState} from "../../../store/filtersStore";
import { resetChipState } from "../../../store/chipReducer";
import {resetHistory} from "../../../store/historySearch";
const MainPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            dispatch(resetUserState());
            dispatch(resetFilteState());
            dispatch(resetChipState());
            dispatch(resetHistory());
        }
        getCategoryAll().then(resolve=>dispatch(addCategory(resolve.data))).catch(f=> console.log(f));
        getAllVendorLocation().then(resolve =>dispatch(addVendorLocation(resolve.data)) ).catch(f=> console.log(f));
        getVendorAll().then(resolve=> dispatch(addVendor(resolve)));
    },[]);
 return (
        <div className={"homepage"}>

            <Layout />
        </div>
    );
};

export default MainPage;