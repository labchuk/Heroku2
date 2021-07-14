import React, {useState, useEffect} from "react";
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
import {useAppSelector, useAppDispatch} from "../../../store/Redux-toolkit-hook";
import { makeStyles } from "@material-ui/core/styles";
import { t } from 'ttag';
import {getDiscounts} from "../../../http/discountApi"
import {setSearchObject, addDiscounds, setSearchWord} from "../../../store/filtersStore"
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 8
    },

}));


const SearchBar =()=>{
    const dispatch = useAppDispatch();
    const arrChips = useAppSelector(state => state.chips);
    const {category, vendorLocation, vendor, searchWord, searchObject} = useAppSelector(state=>state.filters);

    const [open, setOpen] =useState<Boolean>(false)
    const getIds = (name: string, array: any): string[]=>{
        const arr = arrChips.ChipsArray.filter(item => item.name=== name).map(item=>item.label);
        const arrid:string[] = [];
        arr.forEach(item => {
            array.forEach(i => {
                i.name === item && arrid.push(i.id);
            })
        })
        return arrid;
    }

    useEffect(()=>{
        console.log(arrChips.ChipsArray)
        dispatch(setSearchObject({
            page: 0,
            size: 15,
            city: arrChips.ChipsArray.filter(item => item.name==="city").map(item=>item.label),
            country: arrChips.ChipsArray.filter(item => item.name==="country").map(item=>item.label),
            vendorIds: getIds("vendor", vendor),
            categoryId: getIds("category", category),
            searchWord: searchWord,
            subCategoryIds: [],
        }))
        handleClick()
    },[arrChips])
    const handleClick = async(searchWord: string) =>  {
        searchWord && dispatch(setSearchWord(searchWord));
        console.log(searchObject)
        const {data} = await getDiscounts(searchObject);
        dispatch(addDiscounds(data.content))
     };
    const [ableSubCategory, setAbleSubCategory] = useState<String>("");
    const [ableCity, setAbleCyti] = useState();
    const [choiceCity, setChoiceCity] = useState<string[]>([])
    useEffect(()=>{
       setChoiceCity(vendorLocation?.filter(item=>item.country === ableCity).map(item=>firsLetterToUpperCase(item.city)));
    },[ableCity])
    const {pathname} = useLocation();
    const classes = useStyles()

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
    const arrVendorName =vendor?.map(item=>firsLetterToUpperCase(item.name));
    const arrCountry = vendorLocation?.map(item=>firsLetterToUpperCase(item.country))
    const uniqueArr = (arr:string[]) => Array.from(new Set(arr));
    const categoryArr = category?.filter((item: any)=> item.deleted === false).map(item=> firsLetterToUpperCase(item.name));
    const className = pathname === STATISTIC_ROUTE || pathname === HISTORY_ROUTE ? "container-searchbar modal-searchBar": "container-searchbar";
    return (
        <div className={classes.root}>
        <div className={className} >

            <SearchForm handleClick={handleClick}/>

            {pathname !== STATISTIC_ROUTE && <div className="containerFavorite">
                <ControlLabel lable={t`Favorite`} setStateControlLableMy={setStateControlLableMy}/>
                {pathname===HISTORY_ROUTE &&  <>
                <ControlLabel lable={t`Used`} setStateControlLableMy={setStateControlLableMy}/>
                <ControlLabel lable={t`Active`} setStateControlLableMy={setStateControlLableMy}/>
                <ControlLabel lable={t`Not Active`} setStateControlLableMy={setStateControlLableMy} />
                <ControlLabel lable={t`For all period`} setStateControlLableMy={setStateControlLableMy}/>
                </>}
            </div>}
            {pathname !== HISTORY_ROUTE && <>
                <MySelect data={arrCountry? uniqueArr(arrCountry): []} isCategory={false} clName={"location"} id={'1'} name={`Country`} localName={t`Country`} setAble={setAbleCyti} disabled={false} helperText=''/>
                <MySelect data={uniqueArr(choiceCity)} clName={"location"} isCategory={true} name={`City`} localName={t`City`} id={'1'}  setAble={()=>{}} disabled={!ableCity} helperText={!ableCity? "Please choose country": ""}/>
                <SelectMultiple data={arrVendorName? arrVendorName: []} isCategory={false} clName={"location"}  name={`Vendor`} localName={t`Vendor`} disabled={false} helperText={""}/>
                <MySelect data={categoryArr? categoryArr : []} id={'2'} isCategory={false} clName={"location"} name={`Category`} localName={t`Category`} setAble={setAbleSubCategory} disabled={false} helperText=''/>
                <SelectMultiple data={arr} clName={"location"} id={'2'} name={`Sub Category`} localName={t`Sub Category`} isCategory={true} disabled={!ableSubCategory} helperText={!ableSubCategory? "Please choose category": ""}/>
            {pathname === STATISTIC_ROUTE &&  <SelectMultiple data={arr} clName={"location"} name={`User`} localName={t`User`} isCategory={false} disabled={false} helperText={""}/>}

            </>}
            {pathname !== MAIN_ROUTE  &&  <ContainerDataPiker />}
        </div>
        </div>

    );
};

export default SearchBar;