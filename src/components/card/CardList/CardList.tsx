import { Plaginator, SaleCard} from '../../index';
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