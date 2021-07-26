import React, {useEffect, useState} from 'react';
import { InfoItem } from "../../../index";
import "./InformationBlock.scss";
import { t } from 'ttag';
import {makeStyles} from "@material-ui/core/styles";
import {authHost} from "../../../../http";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main
    },

}));





const sInfo: any = {
    totalUser: null,
    crActives: null,
    lastActivity: null,
    location: null,
    vendorsNumber: null,
    promoNumbers: null,
    activePromo: null,
};

/*(async function(){
    const result = await authHost.get(`/statistic/main_statistic`);
    console.log("result is = ", result.data);
    return result;


})()*/



const getStatistic = async function(){
    const result = await authHost.get(`/statistic/main_statistic`);
    console.log("result is = ", result.data);
    return result;
}


const InformationBlock: React.FunctionComponent = () => {
    const classes = useStyles();
    const [countPromo, setCountPromo] = useState(null);
    const [countCr, setCountCr] = useState(null);
    const [lastAct, setLastAct] = useState(null);
    const [actLocation, setActLocation] = useState(null);
    const [vendors, setVendors] = useState(null);
    const [promos, setPromos] = useState(null);
    const [actpromos, setActpromos] = useState(null);
    const [duration, setDuration] = useState(null);
    const [vendor, setVendor] = useState(null);
    const [promo, setPromo] = useState(null);
    const [category, setCategory] = useState(null);
    const [subcat, setSubcat] = useState(null);

    getStatistic().then((result) => {
        setCountPromo(result.data.userSize);
        setCountCr(result.data.amountOfUsedDiscount);
            })


    return (
        <div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title={t`Users actives:`} value={countPromo} />
                <InfoItem title={t`Users CR actives:`} value={countCr} />
                <InfoItem title={t`Last activity:`} value="15 min ago" />
                <InfoItem title={t`Most active location:`} value="London" />
            </div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title={t`Number of Vendors:`} value="54" />
                <InfoItem title={t`Number of promos:`} value="213" />
                <InfoItem title={t`Number of active promos:`} value="39" />
                <InfoItem title={t`Promotions durations:`} value="17 days" />
            </div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title={t`The most popular Vendor:`} value="Cassio" />
                <InfoItem title={t`The most popular Promo:`} value="Hail LITRA!!" />
                <InfoItem title={t`The most popular category:`} value="Sport" />
                <InfoItem title={t`The most popular subcategory:`} value="Shoes" />
            </div>



        </div>
    );
};

export default InformationBlock;