import { Checkbox, TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteRenderOptionState } from "@material-ui/lab";
import React from "react";

const AutocompleteMultipleChoise = (props: { data: any, lab: string, clName: string }) => {
    const [value, setValue] = React.useState<any[]>([]);

    return (
        <Autocomplete
            multiple
            options={props.data}
            disableCloseOnSelect
            value={value}
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            renderOption={(option: { title: string }, state: AutocompleteRenderOptionState) => (
                <li {...state}>
                    {option.title}
                </li>
            )}
            style={{ width: '100%', marginBottom: 15 }}
            renderInput={(params) => (
                <TextField {...params} label={props.lab} required={true} />
            )}
        />)
}

export default AutocompleteMultipleChoise;