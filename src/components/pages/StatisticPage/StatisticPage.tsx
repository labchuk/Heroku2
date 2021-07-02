import React from 'react';

import {Filter, } from "../../index";

import {  StatisticInformation,  ModalSearchBar} from "../../index";
import "./StatisticPage.scss";
import { resolve } from 'path/posix';

const StatisticPage = () => {
    return (
        
        <div className={"statistic"}>
            <ModalSearchBar/>
           <StatisticInformation/>
           
        </div>
    );
};

export default StatisticPage;