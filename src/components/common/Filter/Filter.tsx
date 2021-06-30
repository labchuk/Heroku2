import React from 'react';
import "./Filter.scss";
import SearchForm from "../SearchBar/SearchForm/SearchForm";
// import DatePiker from "../SearchBar/ContainerDatePiker/DatePiker/DatePiker";
import ContainerDataPikerForFilter from "../SearchBar/ContainerDatePiker/ContainerDataPikerFromFilter/ContainerDatePikerForFilter";
import ControlLabel from "../SearchBar/ControlLable/ControlLabel";

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter-container">
                <div className="search-field">
                    <SearchForm/>
                </div>
                <div className="filter-data">
                    <ContainerDataPikerForFilter/>
                    <ControlLabel lable={"for all period"}/>
                </div>

                <div className="group-checkbox">
                    <ControlLabel lable={"Favorite"}/>
                    <ControlLabel lable={"Active"}/>
                    <ControlLabel lable={"Used"}/>
                    <ControlLabel lable={"Not active"}/>
                </div>
                <button className="filter-btn">
                    Apply
                </button>
            </div>
        </div>
    );
};

export default Filter;