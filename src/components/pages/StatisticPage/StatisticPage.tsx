import React, {useEffect} from 'react';

import ChipsArray from "../../common/ChipsArray/ChipsArray";

import {  StatisticInformation,  ModalSearchBar} from "../../index";
import "./StatisticPage.scss";
import { resetUserState } from "../../../store/userSlise";
import {resetFilteState} from "../../../store/filtersStore";
import { resetChipState } from "../../../store/chipReducer";
import {resetHistory} from "../../../store/historySearch";
import {useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {getStatistic} from "../../../http/discountApi"

const StatisticPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            dispatch(resetUserState());
            dispatch(resetFilteState());
            dispatch(resetChipState());
            dispatch(resetHistory());
        }
        getStatistic().then(resolve=>console.log(resolve))
    },[]);
    return (
        <div className={"statistic"}>
            <ModalSearchBar/>
            <ChipsArray/>
           <StatisticInformation/>
           
        </div>
    );
};

export default StatisticPage;