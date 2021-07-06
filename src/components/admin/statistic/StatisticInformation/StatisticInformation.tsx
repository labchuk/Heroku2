import React from 'react';
import {AdditionalDate, GraphInfo, InformationBlock, Charts} from "../../../index";
import "./StatisticInformation.scss";
import {ExportInFile} from "../../../common/ExportInFile/ExportInFile";

const StatisticInformation = () => {
    return (
        <div>
            <div className="Statistic__main">
                <div className="Statistic__info">
                    <InformationBlock/>
                </div> 
                <Charts/>
            </div>

            <AdditionalDate/>
        </div>
    );
};

export default StatisticInformation;