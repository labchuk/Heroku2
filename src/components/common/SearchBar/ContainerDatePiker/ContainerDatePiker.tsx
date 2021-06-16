import React from 'react';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./ContainerDatePiker.scss"
import DatePiker from './DatePiker/DatePiker';

const ContainerDataPiker = () => {
    return (
        <div className="containerData">
            <span className="containerData__span">Date</span>
                <div className="containerData__picker">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePiker label="from" />
                        <DatePiker label="to" />
                    </MuiPickersUtilsProvider>
                </div>
        </div>
    );
};

export default ContainerDataPiker;

