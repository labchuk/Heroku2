import React from 'react';
import {AdditionalDate, GraphInfo, InformationBlock, StatisticFilter,} from "../../../index";
import "./StatisticInformation.scss";

const StatisticInformation = () => {
    return (
        <div>
            <StatisticFilter/>
            <div className="Statistic__mainContent">
                <div className="Statistic__Info">
                    <InformationBlock/>
                </div>
                <div className="Statistic__Graph">
                    <GraphInfo/>
                </div>

            </div>
            <AdditionalDate/>
        </div>
    );
};

export default StatisticInformation;