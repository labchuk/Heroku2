import "./Sort.scss"
import React, {useState} from "react";
import {FormControl, makeStyles} from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import { useEffect } from "react";
import { t } from 'ttag';
import {useAppDispatch, useAppSelector} from "../../../store/Redux-toolkit-hook";
import {addDiscounds, setSortingType} from "../../../store/filtersStore"
import {firsLetterToUpperCase} from "../../../helpers/functionHelpers"

const useStyles = makeStyles((theme) => ({
    sort: {
        width: "150px",
    },
    root: {
        // backgroundColor: theme.palette.secondary.main
    }
}))

const Sort = () => {
    const {searchObject} = useAppSelector(state=>state.filters);
    const dispatch = useAppDispatch();
    const string = searchObject?.sortingType?.toLocaleLowerCase().split("_").map(item=>firsLetterToUpperCase(item)).join(" ")
    const [currentSort, setCurrentSort] = useState(string)
    const handleChangeSort = (event: any) => {
        setCurrentSort(event.target.value)
        const string = currentSort?.toLocaleUpperCase().split(" ").join("_");
        dispatch(setSortingType(string));
    }
const classes = useStyles();

    return(
        <div className={`sort-bar ${classes.root}`}>
            <div>
                <FormControl  >
                    <InputLabel>{t`Sort by`}</InputLabel>
                    <Select
                            id="grouped-native-select"
                            value={currentSort}
                            className={classes.sort}
                            onChange={handleChangeSort}
                    >
                        <MenuItem value={"Ending Soon"}>{t`Ending soon`}</MenuItem>
                        <MenuItem value={"Popular"}>{t`Popular`}</MenuItem>
                        <MenuItem value={"New Discounts"}>{t`New Discounts`}</MenuItem>
                        <MenuItem value={"Hot Sales"}>{t`Hot Sales`}</MenuItem>
                        <MenuItem value={"Coming Soon"}>{t`Coming soon`}</MenuItem>
                    </Select>
                </FormControl>


            </div>
        </div>
    )
}

export default Sort;