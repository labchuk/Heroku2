import React, {useEffect} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch, useAppSelector} from "../../../store/Redux-toolkit-hook";
import {addCategory} from "../../../store/filtersStore";
import {getCategoryAll} from "../../../http/filtersApi"

const MainPage = () => {
    const dispatch = useAppDispatch();
    const category = useAppSelector(state=>state.filters)
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