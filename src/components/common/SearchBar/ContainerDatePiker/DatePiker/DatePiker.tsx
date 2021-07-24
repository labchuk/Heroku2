import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = (createMuiTheme as any)({
    overrides: {
        MuiPickersDay: {
            day: {
                color: "#014f79",
                "&:hover": {
                    color: "#0082CA",
                },
            },
            daySelected: {
                backgroundColor: "#0082CA",
                "&:hover": {
                    backgroundColor: "#014f79",
                    color: "white"
                },
            },
            dayDisabled: {
                color: "#0082CA",
            },
            current: {
                color: "#0082CA",
            },
        },
    },
});

const DatePiker = ({label,setDate,selectedDate, setTime, helperText }: {setTime:any, label: string, setDate: any, selectedDate:any, helperText:string}) => {

     const handleDateChange = (date: any) => {
         setDate(label, date);
     };
    return (
        <ThemeProvider theme={materialTheme}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label={label}
                value={selectedDate}
                onChange={handleDateChange}
                helperText={helperText}
                KeyboardButtonProps={{
                    "aria-label": "change date",
                }}
            />
        </ThemeProvider>
    );
};

export default DatePiker;