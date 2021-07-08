import { TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteRenderOptionState } from "@material-ui/lab";
import React, {useCallback} from "react";

const AutocompleteMultipleChoise = (props: { data: any, lab: string, setValue: any }) => {
    return (
        <Autocomplete
            multiple
            options={props.data}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            onSelect={(e:React.ChangeEvent<HTMLInputElement>) => props.setValue(e.target.value)}
            renderOption={(option: { title: string }, state: AutocompleteRenderOptionState) => (
                <li {...state}>
                    {option.title}
                </li>
            )}
            style={{ width: '100%', marginBottom: 15 }}
            renderInput={(params) => (
                <TextField {...params} label={props.lab} onChange={(e:React.ChangeEvent<HTMLInputElement>) => props.setValue(e.target.value)}  />
            )}
        />)

}

export default AutocompleteMultipleChoise;