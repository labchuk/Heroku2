import React from 'react';
import { CardList, Filter, ModalSearchBar} from "../../index";
import "./HistoryPage.scss"

const HistoryPage = () => {
    return (
        <div className="history">
           <ModalSearchBar/>
           <CardList/>
        </div>
    );
};

export default HistoryPage;