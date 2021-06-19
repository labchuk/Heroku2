import React from 'react';
import { DateValid, Discount, Like, Map, Submitbutton, VendorLogo } from "../../index";
import "./ExtendedCard.scss"

interface ExtendedCardProps {
    discount: {
        place: string,
        nameDiscount: string,
        sizeDiscount: string,
        date: string
    }
}

const ExtendedCard:React.FC<ExtendedCardProps> = ({discount}) => {
    return (
        <div>
            <VendorLogo />
            <Discount discount={discount} />
            <DateValid />
            <Like discount={discount}/>
            <Map/>
            <Submitbutton/>
        </div>
    );
};

export default ExtendedCard;