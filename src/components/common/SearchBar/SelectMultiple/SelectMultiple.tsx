import React, { useState } from "react";
import {
  Input,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Checkbox,
  ListItemText,
  ListSubheader,
  FormHelperText,
  createMuiTheme
} from "@material-ui/core"

import { useLocation } from "react-router-dom";
import { MAIN_ROUTE } from "../../../../utils/consts"
import { STATISTIC_ROUTE } from "../../../../utils/consts"
import { ThemeProvider } from "@material-ui/styles";

import { useAppDispatch, useAppSelector } from '../../../../store/Redux-toolkit-hook';
import { addChipMain, removeChipMain, removeCategoryMain,addChipStatistic,removeCategoryStatistic,removeChipStatistic } from '../../../../store/chipReducer';

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


const SelectMultiple = ({ clName, data, name, isCategory, id, setArrTag, disabled, helperText }: { clName: string, data: string[], name: string, isCategory: boolean, id: string, setArrTag?: any, disabled?: boolean, helperText?: string }) => {
  const { pathname } = useLocation();
  const chipDataMain = useAppSelector(state => state.chips.ChipsArray)
  const chipDataStatistic = useAppSelector(state => state.chips.ChipsArrayStatistic)
  const dispatch = useAppDispatch();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: any }>, index: any) => {
    const numberChip = index.props.value

    if (pathname === MAIN_ROUTE && index.props.children[0].props.checked === false) {
        if (isCategory) dispatch(addChipMain([index.props.value, id]))
        else dispatch(addChipMain({[numberChip]: [], name: name, id: id}))
    } else if (pathname === MAIN_ROUTE && index.props.children[0].props.checked === true) {
        if (isCategory) dispatch(removeCategoryMain({name: index.props.value, id: id}))
        else dispatch(removeChipMain(index.props.value))
    } else if (pathname === STATISTIC_ROUTE && index.props.children[0].props.checked === false) {
        if (isCategory) dispatch(addChipStatistic([index.props.value, id]))
        else dispatch(addChipStatistic({[numberChip]: [], name: name, id: id}))
    } else if (pathname === STATISTIC_ROUTE && index.props.children[0].props.checked === true) {
        if (isCategory) dispatch(removeCategoryStatistic({name: index.props.value, id: id}))
        else dispatch(removeChipStatistic(index.props.value))
    }

  };

  const filterChips = (): any => {
    let ListChip = []
    if (pathname === MAIN_ROUTE) ListChip = chipDataMain
    else ListChip = chipDataStatistic

    if(isCategory) {
      let list = []
      for (const i in ListChip) {
        if (ListChip[i].id === id) {
          let key = Object.keys(ListChip[i])[0]
          list = ListChip[i][key]
        }
      }
      return list
    }
    else {
      let list =[]
      for (const i in ListChip) {
        if (ListChip[i].name === name) {
          list.push(Object.keys(ListChip[i])[0])
        }
      }
      return list
    }
  }

  return (
    // <ThemeProvider theme={theme}>
      <FormControl disabled={disabled} className={clName}>
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
          {data.map((name: string, index) => (
            <MenuItem key={index} value={name}>
              <Checkbox  checked={filterChips().indexOf(name) > -1}/>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    // </ThemeProvider>

  );
}



export default SelectMultiple;