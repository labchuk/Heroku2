import { TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteRenderOptionState } from "@material-ui/lab";

const AutocompleteMultipleChoise = (props: { data: any, lab: string }) => {
    return (
        <Autocomplete
            multiple
            options={props.data}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(option: { title: string }, state: AutocompleteRenderOptionState) => (
                <li {...state}>
                    {option.title}
                </li>
            )}
            style={{ width: '100%', marginBottom: 15 }}
            renderInput={(params) => (
                <TextField {...params} label={props.lab} />
            )}
        />)

}

export default AutocompleteMultipleChoise;