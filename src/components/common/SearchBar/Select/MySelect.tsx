import React from 'react';
import {FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";
import "./Select.scss"



const MySelect = ({clName,data,name}:{clName:string, data:string[], name:string}) => {
    const [age, setAge] = React.useState("");
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
    return (
        <FormControl className={clName}>
            <InputLabel id="select">
                {name} {data.length}
            </InputLabel>
            <Select labelId="select" value={age} onChange={handleChange}>
                {data.map((item) => (
                    <MenuItem value={item} key={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MySelect;