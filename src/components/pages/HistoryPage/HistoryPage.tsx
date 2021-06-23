import React from 'react';
import { CardList, SearchBar } from "../../index";
import "./HistoryPage.scss"

const HistoryPage = () => {
    return (
        <div className="history">
           
            <SearchBar/>
            <CardList/>
           
        </div>
    );
};

export default HistoryPage;