import React from 'react';
import { CardList, Filter } from "../../index";
import "./HistoryPage.scss"

const HistoryPage = () => {
    return (
        <div className="history">
           <Filter/>
           <CardList/>
        </div>
    );
};

export default HistoryPage;