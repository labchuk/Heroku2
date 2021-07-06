import "./Sort.scss"
import React, {useState} from "react";
import {FormControl, makeStyles} from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import { useEffect } from "react";
import { t } from 'ttag';

const useStyles = makeStyles((theme) => ({
    sort: {
        width: "150px",
        background: "#fff",

    },
}))

const Sort = () => {
    const [currentSort, setCurrentSort] = useState("Popular")
    const handleChangeSort = (event: any) => {
        setCurrentSort(event.target.value)

    }
    useEffect(() => {
        console.log(currentSort)
    }, [currentSort]);




const classes = useStyles();

    return(
        <div className={"sort-bar"}>
            <div>
                <FormControl  >
                    <InputLabel>{t`Sort by`}</InputLabel>
                    <Select
                            id="grouped-native-select"
                            value={currentSort}
                            className={classes.sort}
                            onChange={handleChangeSort}
                    >
                        <MenuItem value={"Ending soon"}>{t`Ending soon`}</MenuItem>
                        <MenuItem value={"Popular"}>{t`Popular`}</MenuItem>
                        <MenuItem value={"New"}>{t`New`}</MenuItem>
                        <MenuItem value={"Hot Sales"}>{t`Hot Sales`}</MenuItem>
                        <MenuItem value={"Hot Sales"}>{t`Coming soon`}</MenuItem>
                    </Select>
                </FormControl>


            </div>
        </div>
    )
}

export default Sort;