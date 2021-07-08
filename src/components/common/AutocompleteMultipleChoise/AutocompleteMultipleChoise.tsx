import { Checkbox, TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteRenderOptionState } from "@material-ui/lab";
import React, {useCallback} from "react";

const AutocompleteMultipleChoise = (props: { data: any, lab: string, setValue: any, clName?: string }) => {
    return (
        <Autocomplete
            multiple
            options={props.data}
            className={props.clName}
            disableCloseOnSelect
            getOptionLabel={(option: any) => option.title}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            value={value}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={props.lab}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                        required: value.length === 0
                    }}
                    required
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => props.setValue(e.target.value)}
                />
            )}
            getOptionSelected={(option: any, value: any) => {
                return option.title === value.title;
            }
                    onSelect={(e:React.ChangeEvent<HTMLInputElement>) => props.setValue(e.target.value)}
                              }

            renderOption={(option: { title: string }, state: AutocompleteRenderOptionState) => (
                <li {...state}>
                    {option.title}
                </li>
            )}
        />
    )

}

export default AutocompleteMultipleChoise;