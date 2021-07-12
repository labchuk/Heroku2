
import React,{useState} from 'react';
import {FormControl, Select, InputLabel, MenuItem, FormHelperText } from "@material-ui/core";
import "./Select.scss"
import {addChipMain, updateChipMain,updateChipStatistic, addChipStatistic,removeChipStatistic} from "../../../../store/chipReducer";
import {useAppDispatch,useAppSelector} from '../../../../store/Redux-toolkit-hook';
import { useLocation } from "react-router-dom";
import { MAIN_ROUTE } from "../../../../utils/consts"


const MySelect = ({clName,data, id, name, setAble, disabled, helperText}:{ helperText:string, disabled: boolean ,clName:string, data:string[], id: string, name:string, setAble:any}) => {
    const { pathname } = useLocation();
    const [age, setAge] = useState("");
    const [age2, setAge2] = useState("");
    const dispatch = useAppDispatch()
    const chipDataMain = useAppSelector(state => state.chips.ChipsArray)
    const chipDataStatistic = useAppSelector(state => state.chips.ChipsArrayStatistic)

    const handleChange = (event: React.ChangeEvent<{ value: any }>, index: any) => {
        const numberChip = event.target.value
        const newChip = {[numberChip]: [], name: name, id: id}
        if (pathname === MAIN_ROUTE){
            dispatch(updateChipMain(numberChip))
            dispatch(addChipMain(newChip))
            setAge(event.target.value);
            setAble(event.target.value)
        }
        else {
            dispatch(updateChipStatistic(numberChip))
            dispatch(addChipStatistic(newChip))
            setAge2(event.target.value);
            setAble(event.target.value)

        }

    };


    const filterChips = () => {
        let list = ''
        let data = []
        if (pathname===MAIN_ROUTE) data = chipDataMain
        else data = chipDataStatistic
        for (const i in data) {
            if (data[i].name === name) {
                list = Object.keys(data[i])[0]
            }
        }
        return list
    }


    const [validation, setVal] = React.useState<string>();
    const [errors, setErrors] = React.useState<{ validation: string }>();

    return (
        <FormControl className={clName} >
            <InputLabel id="select">
                {name}
            </InputLabel>
            <Select labelId="select" value={filterChips()} onChange={handleChange}>
                {data.map((item, index) => (
                    <MenuItem value={item} key={index}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};

export default MySelect;