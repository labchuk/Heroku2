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

const getStatistic = async function(){
    const result = await authHost.get(`/statistic/main_statistic`);
    /*console.log("result is = ", result.data);*/
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
        setLastAct(result.data.lastUsedDiscountDate);
        setActLocation(result.data.mostPopularCity);
        setVendors(result.data.vendorSize);
        setPromos(result.data.discountSize);
        setActpromos(result.data.activeDiscountsSize);
        setDuration(result.data.lastEndingDiscountDate);
        setVendor(result.data.theMostPopularVendor.name);
        setPromo(result.data.theMostPopularDiscount.name);
        setCategory(result.data.theMostPopularCategory.name);
        setSubcat(result.data.theMostPopularSubCategory.name);
            })


    return (
        <div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title={t`Users actives:`} value={countPromo} />
                <InfoItem title={t`Users CR actives:`} value={countCr} />
                <InfoItem title={t`Last activity:`} value={new Date(lastAct! * 1000).toLocaleDateString()} />
                <InfoItem title={t`Most active location:`} value={actLocation} />
            </div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title={t`Number of Vendors:`} value={vendors} />
                <InfoItem title={t`Number of promos:`} value={promos} />
                <InfoItem title={t`Number of active promos:`} value={actpromos} />
                <InfoItem title={t`Promotions durations:`} value={new Date(duration! * 1000).toLocaleDateString()} />
            </div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title={t`The most popular Vendor:`} value={vendor} />
                <InfoItem title={t`The most popular Promo:`} value={promo} />
                <InfoItem title={t`The most popular category:`} value={category} />
                <InfoItem title={t`The most popular subcategory:`} value={subcat} />
            </div>
        </div>
    );
};

export default InformationBlock;