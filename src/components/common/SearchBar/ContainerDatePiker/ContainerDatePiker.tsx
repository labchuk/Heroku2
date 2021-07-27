import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {Button, createMuiTheme} from "@material-ui/core"
import DateFnsUtils from "@date-io/date-fns";
import "./ContainerDatePiker.scss"
import DatePiker from './DatePiker/DatePiker';
import {useLocation} from "react-router-dom";
import { t } from 'ttag';
import {MAIN_ROUTE, HISTORY_ROUTE} from "../../../../utils/consts";
import React, {useState, useEffect} from "react";
import { ThemeProvider } from "@material-ui/styles";
import {useAppDispatch, useAppSelector} from "../../../../store/Redux-toolkit-hook";
import {setDiscountsHistory} from "../../../../store/filtersStore";
import {getDiscountsHistory} from "../../../../http/discountApi";
import {timeString} from "../../../../helpers/functionHelpers";
import {setEndDataHistory, setStartDataHistory, setTimeDatePicker} from "./../../../../store/historySearch";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#014f79",
    }
  },
});


const ContainerDataPiker = ({setTime, time}:{setTime:any, time:any } ) => {
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const historyObj = useAppSelector(state => state.historyObj);
    const {page : p, size, startDate, endDate} = historyObj;
    const searchObjectHistory = {page : p, size : size, startDate : startDate, endDate : endDate};
    
    const [selectedDate, setSelectedDate] = useState(time? time : {
        From: undefined,
        To : undefined,
    });
    
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log(counter)
        if(pathname === HISTORY_ROUTE ){
            if(selectedDate.To){
                console.log("to")
                const end =(timeString(selectedDate.To))
                dispatch(setEndDataHistory(end.slice(0,16)+":03.00-00:00"))}
            if(selectedDate.From){
                console.log("From")
                const start =(timeString(selectedDate.From))
                dispatch(setStartDataHistory(start.slice(0,16)+":03.00-00:00"))
            }
            if(!selectedDate.To){
                console.log("!to")
                dispatch(setEndDataHistory(undefined))}
            if(!selectedDate.From){
                console.log("!From")
                dispatch(setStartDataHistory(undefined))
            }   
        }
        setCounter(counter+1);
    }, [selectedDate])
    
    useEffect(()=>{
        if(counter > 1 && pathname === HISTORY_ROUTE){
            console.log(selectedDate)
            console.log(searchObjectHistory)
            getDiscountsHistory(searchObjectHistory).then(resolve=> dispatch(setDiscountsHistory(resolve.data))).catch(f=> console.log(f));     
        }
    },[counter]);
    
    const [helperText, setHelperText] = useState("");
    useEffect(() => {
        selectedDate.From - selectedDate.To > 0 ? setHelperText("start date must be earlier then end date") : setHelperText("")
    }, [selectedDate])

    const handleClick = () =>{
        setSelectedDate({From: undefined,To : undefined,})
        pathname === MAIN_ROUTE && setTime({From: undefined,To : undefined,})
    }
    const setDate = (name:string, date:any) => {
        setSelectedDate({...selectedDate, [name]: date });
        pathname === MAIN_ROUTE && setTime({...selectedDate, [name]: date})
    }
    return (
        <div className={pathname !== MAIN_ROUTE? "containerData-searchBar":"containerData"}>
            <span className="containerData__span">{t`Date`}</span>
            <div className="containerData__picker">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePiker label={t`From`}  setDate={setDate} selectedDate={selectedDate.From} />
                                <DatePiker label={t`To`} setDate={setDate} selectedDate={selectedDate.To} helperText={helperText}/>
                </MuiPickersUtilsProvider>
                {pathname !== MAIN_ROUTE && <ThemeProvider theme={theme}>
                    <Button  color="primary" onClick={handleClick} >{t`Clean date`}</Button>
                </ThemeProvider>}
            </div>
        </div>
    );
};

export default ContainerDataPiker;
