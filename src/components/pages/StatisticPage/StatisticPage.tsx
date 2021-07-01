import React from 'react';

import {Filter, } from "../../index";

import {  StatisticInformation,  ModalSearchBar} from "../../index";
import {getSubCategoryAll} from "../../../http/filtersApi"
import "./StatisticPage.scss";
import { resolve } from 'path/posix';

const StatisticPage = () => {
   getSubCategoryAll().then(resolve=>console.log(resolve))
    return (
        
        <div className={"statistic"}>
            <ModalSearchBar/>
           <StatisticInformation/>
           
        </div>
    );
};

export default StatisticPage;