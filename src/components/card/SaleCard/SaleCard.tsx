import { Discount, Like, VendorLogo } from '../../index';
import './SaleCard.scss'
import {makeStyles} from "@material-ui/core/styles";

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
    return (
        <div className={classes.root}>
            <div className="sale-card">
                <VendorLogo handleClick={handleClick} />
                <Discount discount={discount} handleClick={handleClick} />
                <Like discount={discount} cards={cards} updateData={updateData} />
            </div>
        </div>

    );
};

export default SaleCard;