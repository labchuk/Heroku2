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

      const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

    return (
        <FormControl className={clName}>
        <InputLabel id="demo-mutiple-checkbox-label">{name}</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
          MenuProps={MenuProps}
        >
          {data.map((name:string) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
};

export default SelectMultiple;