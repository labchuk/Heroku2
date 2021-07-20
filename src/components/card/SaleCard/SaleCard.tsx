import { Discount, Like, VendorLogo } from '../../index';
import './SaleCard.scss'
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import Skeleton from "@material-ui/lab/Skeleton";
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
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 20
    },

}));

const SaleCard: React.FC<SaleCardProps> = ({ discount, cards, updateData, handleClick }) => {
    const classes = useStyles()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);

    return (
        <div className={classes.root}>
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
        </div>

    );
};

export default SaleCard;