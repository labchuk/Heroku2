import React from 'react';

import {Filter, } from "../../index";

import {  StatisticInformation,  ModalSearchBar} from "../../index";

import "./StatisticPage.scss";

const StatisticPage = () => {
    return (
        
        <div className={"statistic"}>
            <ModalSearchBar/>
           {/* <BarCarts/> */}
           <StatisticInformation/>
           
        </div>
    );
};

export default StatisticPage;