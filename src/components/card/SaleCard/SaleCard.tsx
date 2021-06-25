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
    updateData: (data: any) => void

}

const SaleCard: React.FC<SaleCardProps> = ({ discount, cards, updateData }) => {
    return (
        <div className="sale-card">
            <VendorLogo />
            <Discount discount={discount} />
            <Like discount={discount} cards={cards} updateData={updateData} />
        </div>
    );
};

export default SaleCard;