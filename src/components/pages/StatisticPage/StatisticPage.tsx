import React from 'react';

import {Filter, } from "../../index";

import {  StatisticInformation,  ModalSearchBar} from "../../index";
import {getVendorAll, postVendor, getVendorId, restVendorId, deleteVendorId, postVendorLocation} from "../../../http/filtersApi"
import "./StatisticPage.scss";

const StatisticPage = () => {
//     const data = getVendorAll().then(resolv=>console.log(resolv));
//     getVendorId("fdd429d4-fceb-403f-8b69-04b30e2c2b91",{name:"adidas",
// description:"It all started with Crazy Idea - the dream of a 24-year-old boy from Oregon to change his life and leave his mark on history.",
// email:"nike24@gmail.com",
// image:"eweretrehterjjhwhfdhfidf.jpeg"}).then(resolv=>console.log(resolv));
    return (
        
        <div className={"statistic"}>
            <ModalSearchBar/>
           <StatisticInformation/>
           
        </div>
    );
};

export default StatisticPage;