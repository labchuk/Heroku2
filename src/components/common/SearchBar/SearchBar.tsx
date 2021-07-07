import React, {useState} from "react";
import  "./SearchBar.scss";
import {
    SearchForm,
    MySelect,
    SelectMultiple,
    ControlLabel,
    ContainerDataPiker,
    Submitbutton
} from "../../index";
import {firsLetterToUpperCase} from "../../../helpers/functionHelpers";
import {useLocation} from "react-router-dom";
import {STATISTIC_ROUTE, HISTORY_ROUTE, MAIN_ROUTE} from "../../../utils/consts";
import {useAppSelector} from "../../../store/Redux-toolkit-hook";
import { t } from 'ttag';


const SearchBar =()=>{
    const {pathname} = useLocation();

    const [stateControlLabel, setStateControlLabel] = useState({
        "Favorite": false,
        "Used": false,
        "Active": false,
        "Not Activ": false,
        "For all period": false
    });
    const setStateControlLableMy = (name: string, state:boolean) =>{
        setStateControlLabel({...stateControlLabel, [name]: state})
    }
    const arr: string[] = ["aaaaaaa","dddddddddddd","sssssssssss"].map(item=>firsLetterToUpperCase(item));
    const [ableSubCategory, setAbleSubCategory] = useState(true)
    const [ableCity, setAbleCyti] = useState(true)
    const {category} = useAppSelector(state=>state.filters);
    const categoryArr = category?.map((item: any)=> item.name)
    const className = pathname === STATISTIC_ROUTE || pathname === HISTORY_ROUTE ? "container-searchbar modal-searchBar": "container-searchbar"
    return (
        <div className={className} >
            <SearchForm />
            {pathname !== STATISTIC_ROUTE && <div className="containerFavorite">
                <ControlLabel lable={t'Favorite'} setStateControlLableMy={setStateControlLableMy}/>
                {pathname===HISTORY_ROUTE &&  <>
                <ControlLabel lable={t`Used`} setStateControlLableMy={setStateControlLableMy}/>
                <ControlLabel lable={t'Active'} setStateControlLableMy={setStateControlLableMy}/>
                <ControlLabel lable={t`Not Activ`} setStateControlLableMy={setStateControlLableMy} />
                <ControlLabel lable={t`For all period`} setStateControlLableMy={setStateControlLableMy}/>
                </>}
            </div>}
            {pathname !== HISTORY_ROUTE && <>
                <MySelect data={arr} clName={"location"} name={t`Country`} setAble={setAbleCyti}/>
                <SelectMultiple data={arr} clName={"location"} name={t`City`} disabled={ableCity} helperText={ableCity? "Please choose country": ""}/>
                <SelectMultiple data={arr} clName={"location"} name={t`Vendor`} disabled={false} helperText={""}/>
                <MySelect data={categoryArr?categoryArr:[]} clName={"location"} name={t`Category`} setAble={setAbleSubCategory}/>
                <SelectMultiple data={arr} clName={"location"} name={t`Sub Category`} disabled={ableSubCategory} helperText={ableSubCategory? "Please choose category": ""}/>
            {pathname === STATISTIC_ROUTE &&  <SelectMultiple data={arr} clName={"location"} name={t`User`} disabled={false} helperText={""}/>}
            </>}
            {pathname !== MAIN_ROUTE  &&  <ContainerDataPiker />}
            <Submitbutton name={t`Apply`} handleClick={(e:any)=>{}} classN={"submit"}/>
        </div>
    );
};

export default SearchBar;