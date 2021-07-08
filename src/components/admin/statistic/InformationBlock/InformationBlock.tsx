import React from 'react';
import { InfoItem } from "../../../index";
import "./InformationBlock.scss";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main
    },

}));

const InformationBlock: React.FunctionComponent = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title="Users actives:" value="344" />
                <InfoItem title="Users CR actives:" value="49" />
                <InfoItem title="Last activity:" value="15 min ago" />
                <InfoItem title="Most active location:" value="London" />
            </div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title="Number of Vendors:" value="54" />
                <InfoItem title="Number of promos:" value="213" />
                <InfoItem title="Number of active promos:" value="39" />
                <InfoItem title="Promotions durations:" value="17 days" />
            </div>
            <div className={`InfoBlock ${classes.root}`}>
                <InfoItem title="The most popular Vendor:" value="Cassio" />
                <InfoItem title="The most popular Promo:" value="Hail LITRA!!" />
                <InfoItem title="The most popular category:" value="Sport" />
                <InfoItem title="The most popular subcategory:" value="Shoes" />
            </div>



        </div>
    );
};

export default InformationBlock;