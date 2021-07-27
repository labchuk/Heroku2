import React, {useEffect} from 'react';
import { CardList} from "../../index";
import "./HistoryPage.scss";
import {useAppDispatch, useAppSelector} from "../../../store/Redux-toolkit-hook";
import { setDiscountsHistory} from "../../../store/filtersStore";
import {getDiscountsHistory} from "../../../http/discountApi";
import { resetUserState } from "../../../store/userSlise";
import {resetFilteState} from "../../../store/filtersStore";
import { resetChipState } from "../../../store/chipReducer";
import {resetHistory} from "../../../store/historySearch";

const HistoryPage = () => {
    
     const dispatch = useAppDispatch();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            dispatch(resetUserState());
            dispatch(resetFilteState());
            dispatch(resetChipState());
            dispatch(resetHistory());
        }
        getDiscountsHistory({page:0,size:15}).then(resolve=> dispatch(setDiscountsHistory(resolve.data))).catch(f=> console.log(f)); 
    },[]);
    
    
    return (
        <div className="history"> 
           
           <CardList/>
        </div>
    );
};

export default HistoryPage;