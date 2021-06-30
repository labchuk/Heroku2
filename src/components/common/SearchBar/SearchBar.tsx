import React, { useRef } from "react";
import  "./SearchBar.scss";
import {
    SearchForm,
    MySelect,
    SelectMultiple,
    ControlLabel,
    Сategory,
    ContainerDataPiker,
    Submitbutton
} from "../../index";
import {firsLetterToUpperCase} from "../../../helpers/functionHelpers";
import {useLocation} from "react-router-dom";
import {STATISTIC_ROUTE} from "../../../utils/consts"

const SearchBar =()=>{
    const {pathname} = useLocation();
    const SearchBarRef:any = useRef();
    const arr0: string[] = ["44444444","5555555","66666666"];
    const arr: string[] = ["aaaaaaa","dddddddddddd","sssssssssss"];
    const arr2: string[] = ["1111111","222222222","3333333333"];
    const arr3: string[] = ["77777777","88888888","9999999999"];

     const className = pathname === STATISTIC_ROUTE? "container-searchbar modal-searchBar": "container-searchbar"
    return (
        <div className={className}   ref={SearchBarRef}>
            <SearchForm />
            {pathname !== STATISTIC_ROUTE && <div className="containerFavorite">
                <ControlLabel lable={"Favorite"} />
            </div>}
            <Сategory data={arr2} clName={"location"} name={"Location"} />
            <SelectMultiple data={arr} clName={"location"} name={"Vendor"} setArrTag={null}/>
            <Сategory data={arr2} clName={"location"} name={"Category"} />
            {pathname === STATISTIC_ROUTE &&  <SelectMultiple data={arr} clName={"location"} name={"User"} setArrTag={null}/>}
            {pathname === STATISTIC_ROUTE &&  <ContainerDataPiker/>}
            <Submitbutton name={"Apply"} heandekCklik={(e:any)=>{}} classN={"submit"}/>
        </div>
    );
};

export default SearchBar;