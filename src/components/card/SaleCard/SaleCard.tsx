import { Discount, Like, VendorLogo } from '../../index';
import './SaleCard.scss'

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
    return (
        <div className="sale-card">
            <VendorLogo handleClick={handleClick} />
            <Discount discount={discount} handleClick={handleClick} />
            <Like discount={discount} cards={cards} updateData={updateData} />
        </div>
    );
};

export default SaleCard;