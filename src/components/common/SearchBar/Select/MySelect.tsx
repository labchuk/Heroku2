import React from 'react';
import {FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";
import "./Select.scss"
import {addChip, removeChip} from "../../../../store/chipReducer";
import {useAppDispatch,useAppSelector} from '../../../../store/Redux-toolkit-hook'



const MySelect = ({clName,data,name}:{clName:string, data:string[], name:string}) => {
    const [age, setAge] = React.useState("");
    const dispatch = useAppDispatch()
    const chipData = useAppSelector(state => state.chips.ChipsArray)

    const handleChange = (event: React.ChangeEvent<{ value: any }>,index:any) => {
        const numberChip = event.target.value
        const indexChip = index.key.slice(2)
        const newChip = {id: name+indexChip,label: numberChip}
        dispatch(addChip(newChip))
        if (numberChip){
            const indexRemove = data.indexOf(age)
            dispatch(removeChip(name+indexRemove))
        }
        setAge(event.target.value);
    };
    const filterChips = () => {
        for (const i in chipData) {
            if (chipData[i].label === age){
                return age
            }
        }
        return ''
    }
    return (
        <FormControl className={clName}>
            <InputLabel id="select">
                {name} {data.length}
            </InputLabel>
            <Select labelId="select" value={filterChips()} onChange={handleChange}>
                {data.map((item,index) => (
                    <MenuItem value={item} key={index}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MySelect;