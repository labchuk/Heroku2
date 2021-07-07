import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {Button, createMuiTheme} from "@material-ui/core"
import DateFnsUtils from "@date-io/date-fns";
import "./ContainerDatePiker.scss"
import DatePiker from './DatePiker/DatePiker';
import {useLocation} from "react-router-dom";
import {STATISTIC_ROUTE} from "../../../../utils/consts"
import { t } from 'ttag';
import {MAIN_ROUTE} from "../../../../utils/consts";
import React, {useState} from "react";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#014f79",
    }
  },
});


const ContainerDataPiker = () => {
    const {pathname} = useLocation();
    const [selectedDate, setSelectedDate] = useState({
        From: new Date(),
        To : new Date(),
        });
    const handleClick = () =>{
        setSelectedDate({From: new Date(),To : new Date(),})
    }
    const setDate = (name:string, date:any) => {
        setSelectedDate({...selectedDate, [name]: date });
    }
    return (
        <div className={pathname !== MAIN_ROUTE? "containerData-searchBar":"containerData"}>
            <span className="containerData__span">Date</span>
        <div className={pathname === STATISTIC_ROUTE? "containerData-searchBar":"containerData"}>
            <span className="containerData__span">{t`Date`}</span>
                <div className="containerData__picker">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePiker label={t`From`} setDate={setDate} selectedDate={selectedDate.From}/>
                        <DatePiker label={t`To`} setDate={setDate} selectedDate={selectedDate.To}/>
                    </MuiPickersUtilsProvider>
                    {!(pathname === MAIN_ROUTE) && <ThemeProvider theme={theme}>
                    <Button  color="primary" onClick={handleClick} >Clean date</Button>
                    </ThemeProvider>}
                </div>
        </div>
    );
};

export default ContainerDataPiker;

