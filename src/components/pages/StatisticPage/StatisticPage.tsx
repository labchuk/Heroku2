import React from 'react';

import {Filter, } from "../../index";

import {  StatisticInformation,  ModalSearchBar,Charts} from "../../index";

import "./StatisticPage.scss";

const StatisticPage = () => {
    return (
        
        <div className={"statistic"}>
            <ModalSearchBar/>
           <StatisticInformation/>
           
        </div>
    );
};

export default StatisticPage;