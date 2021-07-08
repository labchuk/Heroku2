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
    if(false){
        getDeletedCategory().then(resolve=> {
           console.log(resolve.data)
       })
       restCategory("d46a20da-9a01-463c-a005-1daf234a3929",{name:"test"}).then(resolve=> {
            console.log(resolve.data)
        })
        getCategoryId("d46a20da-9a01-463c-a005-1daf234a3929").then(resolve=> {
            console.log(resolve.data)
        })
        // deleteCategoryId("40a5e4ad-7921-4f5e-bb9c-168e23023483").then(resolve=> {
        //     console.log(resolve.data)
        // })
        // deleteCategoryId("700be76f-3fa8-48ba-8502-76d3091dd359").then(resolve=> {
        //     console.log(resolve.data)
        // })
        // deleteCategoryId("ab705437-c773-4f45-8539-ada95af47ca6")

        // deleteCategoryId("c25e69dc-d021-405b-aaf0-49cf72946ccf")

        // deleteCategoryId("88b4f5b2-1db7-4129-95b9-c17e0479c4b5")

        // deleteCategoryId("61de4f38-717e-4c9d-ae13-edd4eb03ab6c")

        postSubCategory({name:"Theater", categoryId: "d46a20da-9a01-463c-a005-1daf234a3929"}).then(resolve=> {
            console.log(resolve.data)
        })
        // postSubCategory({name:"Cinema", categoryId: "d46a20da-9a01-463c-a005-1daf234a3929"})
        // postSubCategory({name:"Festival", categoryId: "d46a20da-9a01-463c-a005-1daf234a3929"})
    }
 return (
        <div className={"homepage"}>
            <Layout />
        </div>
    );
};

export default MainPage;