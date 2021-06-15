import React, {useState} from 'react';
import { DateValid, Discount, Like, VendorLogo } from '../../index';
import './SaleCard.scss'

const SaleCard: React.FC = () => {
    return (
        <div className="sale-card">
           <VendorLogo/>
           <Discount/>
           <Like />
        </div>
    );
};

export default SaleCard;