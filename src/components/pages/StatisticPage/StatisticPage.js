import React from 'react';
import { Footer, Header, StatisticInformation } from "../../index";
import style from "./StatisticPage.scss";

const StatisticPage = () => {
    return (
        <div>
           <Header/>
           <StatisticInformation/>
           <Footer/>
        </div>
    );
};

export default StatisticPage;