import React from 'react';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./ContainerDatePikerForFilter.scss"
import DatePiker from '../DatePiker/DatePiker';

const ContainerDataPikerForFilter = () => {
    return (
        <div className="containerDataPiker">
            <span className="containerDataPiker__span">Date</span>
            <div className="containerDataPiker__picker">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePiker label="from" />
                    <DatePiker label="to" />
                </MuiPickersUtilsProvider>
            </div>
        </div>
    );
};

export default ContainerDataPikerForFilter;