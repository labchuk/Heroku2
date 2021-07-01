import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./ContainerDatePiker.scss"
import DatePiker from './DatePiker/DatePiker';
import {useLocation} from "react-router-dom";
import {STATISTIC_ROUTE} from "../../../../utils/consts"


const ContainerDataPiker = () => {
    const {pathname} = useLocation();
    return (
        <div className={pathname === STATISTIC_ROUTE? "containerData-searchBar":"containerData"}>
            <span className="containerData__span">Date</span>
                <div className="containerData__picker">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePiker label="From" />
                        <DatePiker label="To" />
                    </MuiPickersUtilsProvider>
                </div>

        </div>
    );
};

export default ContainerDataPiker;

