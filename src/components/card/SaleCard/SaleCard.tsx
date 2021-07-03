import { Discount, Like, VendorLogo } from '../../index';
import './SaleCard.scss'
import React, {useEffect, useState} from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";

interface SaleCardProps {
    discount: {
        id: number,
        place: string,
        nameDiscount: string,
        sizeDiscount: string,
        date: string
    },
    cards: {
        id: number,
        place: string,
        nameDiscount: string,
        sizeDiscount: string,
        date: string
    }[],
    updateData: (data: any) => void,
    handleClick: (e: any) => void

}

const SaleCard: React.FC<SaleCardProps> = ({ discount, cards, updateData, handleClick }) => {
    // logic for emulate skeleton
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, []);

    // logic for emulate skeleton

    return (
        <div className="sale-card">
            {loading ? (
                <React.Fragment>
                    <Skeleton variant="circle" width={60} height={60} style={{ marginTop: 36, marginLeft: 16}}   />
                </React.Fragment>
            ) : (<VendorLogo handleClick={handleClick} />)}

            {loading ? (
                <React.Fragment>
                    <Skeleton  height={170} width={230} style={{ marginLeft: 16, marginTop: -26 }} />
                </React.Fragment>
            ) : ( <Discount discount={discount} handleClick={handleClick} />)}


           <Like discount={discount} cards={cards} updateData={updateData} />

        </div>
    );
};

export default SaleCard;


/*{loading ? (
    <React.Fragment>
         <Skeleton variant="circle" width={30} height={30} style={{ marginLeft: 16}}
    </React.Fragment>
) : ()
}*/
