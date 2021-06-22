import React from 'react';
import { CardList, Footer, Header, SearchBar } from "../../index";
import "./HistoryPage.scss"

const HistoryPage = () => {
    return (
        <div className="history">
            <Header/>
            {/*<SearchBar/>*/}
            <CardList/>
            <Footer/>
        </div>
    );
};

export default HistoryPage;