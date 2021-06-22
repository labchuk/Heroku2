// import React, { useState, Fragment } from "react";
// // import { createMuiTheme } from "@material-ui/core/styles";
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Box from '@material-ui/core/Box';
// import DateRangePicker, { DateRange } from '@material-ui/lab/DateRangePicker';

// // const materialTheme = (createMuiTheme as any)({
// //     overrides: {
// //         MuiPickersDay: {
// //             day: {
// //                 color: "#014f79",
// //                 "&:hover": {
// //                     color: "#0082CA",
// //                 },
// //             },
// //             daySelected: {
// //                 backgroundColor: "#0082CA",
// //                 "&:hover": {
// //                     backgroundColor: "#014f79",
// //                     color: "white"
// //                 },
// //             },
// //             dayDisabled: {
// //                 color: "#0082CA",
// //             },
// //             current: {
// //                 color: "#0082CA",
// //             },
// //         },
// //     },
// // });
 
// const DatePiker = () => {
  
//   const [value, setValue] = useState<DateRange<Date>>([null, null]);
   
//   // interface ISx {
//   //   mt: number,
//   //   mb: number,
//   // };

//   // const sx: ISx = {
//   //   mt: 2,
//   //   mb: 1,
//   // }
  
  
//     return (
//           <>
//             {/* <Typography sx={{ mt: 2, mb: 1 }}>1 calendar </Typography>
//             <DateRangePicker
//               calendars={1}
//               value={value}
//               onChange={(newValue) => {
//                 setValue(newValue);
//               }}
//               renderInput={(startProps, endProps) => (
//                 <Fragment>
//                   <TextField {...startProps} />
//                   <Box sx={{ mx: 2 }}> to </Box>
//                   <TextField {...endProps} />
//                 </Fragment>
//               )}
//             /> */}
//           </>
//     );
// };

// export default DatePiker;

import React, { useState } from "react";
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

const DatePiker = (props: {label: string}) => {
     const [selectedDate, setSelectedDate] = useState(
         new Date()
     );

     const handleDateChange = (date: any) => {
         setSelectedDate(date);
     };
    return (
        <ThemeProvider theme={materialTheme}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label={props.label}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": "change date",
                }}
            />
        </ThemeProvider>
    );
};

export default DatePiker;