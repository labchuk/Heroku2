import "./Sort.scss"
import React from "react";
import {FormControl, makeStyles, NativeSelect} from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
    sort: {
        width: "150px",
        background: "#fff",
    },
}))

const Sort = () => {

const classes = useStyles();

    return(
        <div className={"sort-bar"}>
            <div>
                <FormControl  >
                    <InputLabel>Sort by</InputLabel>
                    <Select defaultValue="2" id="grouped-native-select" className={classes.sort}>
                        <MenuItem value={1}>Last Days</MenuItem>
                        <MenuItem value={2}>Popular</MenuItem>
                        <MenuItem value={3}>New</MenuItem>
                        <MenuItem value={4}>Hot Sales</MenuItem>
                    </Select>
                </FormControl>


            </div>
        </div>
    )
}

export default Sort;