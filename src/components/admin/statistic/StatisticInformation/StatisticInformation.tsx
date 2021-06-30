import React from 'react';
import {AdditionalDate, GraphInfo, InformationBlock, StatisticFilter,} from "../../../index";
import "./StatisticInformation.scss";
import {ExportInFile} from "../../../common/ExportInFile/ExportInFile";

const StatisticInformation = () => {
    return (
        <div>
           {/* <StatisticFilter/>*/}
            <div className="Statistic__main">
                <div className="Statistic__info">
                    <InformationBlock/>
                </div>
                <div className="Statistic__graph">
                    <GraphInfo/>
                </div>

            </div>

            <AdditionalDate/>
        </div>
    );
};

export default StatisticInformation;