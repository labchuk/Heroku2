import React, {useState} from 'react';
import { DateValid, Discount, Like, VendorLogo } from '../../index';
import './SaleCard.scss'

interface SaleCardProps {
    discount: {
        place: string,
        nameDiscount: string,
        sizeDiscount: string,
        date: string
    }
}

const SaleCard: React.FC<SaleCardProps> = ({discount}) => {
    return (
        <div className="sale-card">
           <VendorLogo/>
           <Discount discount={discount}/>
           <Like discount={discount}/>
        </div>
    );
};

export default SaleCard;