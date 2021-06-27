import React, { useRef } from "react";
import  "./SearchBar.scss";
import {
    SearchForm,
    MySelect,
    SelectMultiple,
    ControlLabel,
    Сategory
} from "../../index";
import { Clear } from "@material-ui/icons";

const SearchBar =()=>{
    const SearchBarRef:any = useRef();
    const arr0: string[] = ["44444444","5555555","66666666"];
    const arr: string[] = ["aaaaaaa","dddddddddddd","sssssssssss"];
    const arr2: string[] = ["1111111","222222222","3333333333"];
    const arr3: string[] = ["77777777","88888888","9999999999"];
    return (
        <div className="container-searchbar" ref={SearchBarRef}>
            <div className="close">
                <button
                    className="btn-close"
                    onClick={() =>
                        (SearchBarRef.current.style.display = "none")
                    }
                >
                    <Clear/>
                </button>
            </div>
            <SearchForm />
            <div className="containerFavorite">
                <ControlLabel lable={"Favorite"} />
            </div>
            <MySelect data={arr0} name={"location"} clName={"location"} />
            <SelectMultiple data={arr} clName={"location"} name={"brands"} setArrTag={null}/>
            <Сategory data={arr2} clName={"location"} name={"category"} />
            <SelectMultiple
                data={arr3}
                clName={"location"}
                name={"discount size"}
                setArrTag={null}
            />
            <button type="submit" className="submit">
                Apply
            </button>
        </div>
    );
};

export default SearchBar;