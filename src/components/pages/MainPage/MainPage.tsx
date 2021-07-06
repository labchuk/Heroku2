import React, {useEffect} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {addCategory} from "../../../store/filtersStore";
import {getCategoryAll, postSubCategory } from "../../../http/filtersApi"

const MainPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        getCategoryAll().then(resolve=> {
            dispatch(addCategory(resolve.data))
            console.log(resolve.data)
        }).catch(f=> console.log(f))
    },[]);

 return (
        <div className={"homepage"}>
            <Layout />
        </div>
    );
};

export default MainPage;