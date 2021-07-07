import React from 'react';
import { InfoItem } from "../../../index";
import "./InformationBlock.scss";
import { t } from 'ttag';

const InformationBlock: React.FunctionComponent = () => {
    return (
        <div>
            <div className="InfoBlock">
                <InfoItem title={t`Users actives:`} value="344" />
                <InfoItem title={t`Users CR actives:`} value="49" />
                <InfoItem title={t`Last activity:`} value="15 min ago" />
                <InfoItem title={t`Most active location:`} value="London" />
            </div>
            <div className="InfoBlock">
                <InfoItem title={t`Number of Vendors:`} value="54" />
                <InfoItem title={t`Number of promos:`} value="213" />
                <InfoItem title={t`Number of active promos:`} value="39" />
                <InfoItem title={t`Promotions durations:`} value="17 days" />
            </div>
            <div className="InfoBlock">
                <InfoItem title={t`The most popular Vendor:`} value="Cassio" />
                <InfoItem title={t`The most popular Promo:`} value="Hail LITRA!!" />
                <InfoItem title={t`The most popular category:`} value="Sport" />
                <InfoItem title={t`The most popular subcategory:`} value="Shoes" />
            </div>



        </div>
    );
};

export default InformationBlock;