import React from 'react';
import './Discount.scss'

interface DiscountProps {
    discount: {
        place: string,
        nameDiscount: string,
        sizeDiscount: string,
        date: string
    },
    handleClick: (e: any) => void
}

const Discount: React.FC<DiscountProps> = ({ discount, handleClick }) => {
    React.useEffect(() => {
        console.log(discount.sizeDiscount)
    }, [])
    return (
        <div className="discount" onClick={handleClick}>
            <h1 className="discount__title">{discount.nameDiscount}</h1>
            <div className="discount__info">
                <strong className="discount__size">{discount.sizeDiscount}</strong>
                off
            </div>
            <div className="discount__date">
                Valid until {discount.date}
            </div>
            <div className="discount__place">
                {discount.place}
            </div>
        </div>
    );
};

export default Discount;