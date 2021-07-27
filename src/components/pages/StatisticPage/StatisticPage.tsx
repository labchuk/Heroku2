import React, {useEffect} from 'react';
import ChipsArray from "../../common/ChipsArray/ChipsArray";
import {  StatisticInformation,  ModalSearchBar} from "../../index";
import "./StatisticPage.scss";



const StatisticPage = () => {
    return (
        
        <div className={"statistic"}>
            <ModalSearchBar/>
            <ChipsArray/>
           <StatisticInformation/>
           
        </div>
    );
};

export default StatisticPage;