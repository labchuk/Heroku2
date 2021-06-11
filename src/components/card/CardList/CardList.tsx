import React from 'react';
import { Plaginator, SaleCard, ExtendedCard} from '../../index';
import "./CardList.scss";

const CardList = () => {
    return (
        <div>
            <li>
                <SaleCard />
                <SaleCard />
                <SaleCard />
            </li>
            <Plaginator/>
        </div>
    );
};

export default CardList;