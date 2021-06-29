import React from 'react';
import {Filter, StatisticInformation} from "../../index";
import "./StatisticPage.scss";

const StatisticPage = () => {
    return (
        <div className={"statistic"}>
          {/*  <Filter/>*/}
           <StatisticInformation/>
           
        </div>
    );
};

export default StatisticPage;