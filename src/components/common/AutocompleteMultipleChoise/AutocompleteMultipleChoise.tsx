import { Checkbox, TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteRenderOptionState } from "@material-ui/lab";
import React from "react";

const AutocompleteMultipleChoise = (props: { data: any, lab: string, clName: string }) => {
    const [value, setValue] = React.useState<any[]>([]);

    return (
        // <Autocomplete
        //     multiple
        //     options={props.data}
        //     disableCloseOnSelect
        //     getOptionLabel={(option) => option.title}
        //     renderOption={(option: { title: string }, state: AutocompleteRenderOptionState) => (
        //         <li {...state}>
        //             {option.title}
        //         </li>
        //     )}
        //     style={{ width: '100%', marginBottom: 15 }}
        //     renderInput={(params) => (
        //         <TextField {...params} label={props.lab} required={true} />
        //     )}
        // />)


        <Autocomplete
            includeInputInList={false}
            className={props.clName}
            options={props.data}
            getOptionLabel={(option: any) => option.title}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            value={value}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label={props.lab}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                        required: value.length === 0
                    }}
                    required={true}
                />
            )}
            multiple={true}
            disableClearable={true}
            disableCloseOnSelect={true}
            getOptionSelected={(option: any, value: any) => {
                return option.title === value.title;
            }}
            autoSelect={true}
            renderOption={(option) => (
                <React.Fragment>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        color="default"
                    />
                    {option.title}
                </React.Fragment>
            )}
        />
    )
}

export default AutocompleteMultipleChoise;