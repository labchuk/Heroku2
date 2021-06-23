import React, { useState } from "react";
import {
    Input,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Checkbox,
    ListItemText,
} from "@material-ui/core";
import {useAppDispatch,useAppSelector} from '../../../../store/Redux-toolkit-hook'
import {addChip,removeChip} from '../../../../store/chipReducer'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const SelectMultiple = ({clName,data,name}:{clName:string, data:string[], name:string}) => {
    const [personName, setPersonName] = React.useState<string[]>([]);
    const chipData = useAppSelector(state => state.chips.ChipsArray)
    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<{ value: any }>,index:any) => {
        const numberChip = event.target.value
        const indexChip = index.key.slice(2)
        if (numberChip.length>=personName.length){
            const newChip = {id: name+indexChip,label: numberChip[numberChip.length - 1]}
            dispatch(addChip(newChip))
        } else {
            dispatch(removeChip(name+indexChip))
        }
        setPersonName(event.target.value as string[]);

    };
    const filterChips = () => {
        const oldListChips = [...personName]
        const newListChips = []
        for (const i in oldListChips) {
            for (const j in chipData) {
                if (oldListChips[i] === chipData[j].label) {
                    newListChips.push(oldListChips[i])
                }
            }
        }
        return newListChips
    }

    return (
        <FormControl className={clName}>
        <InputLabel id="demo-mutiple-checkbox-label">{name}</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={filterChips()}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
          MenuProps={MenuProps}
        >
          {data.map((name:string,index) => (
            <MenuItem key={index} value={name}>
              <Checkbox checked={filterChips().indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
};

export default SelectMultiple;