import React, { useState } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";




const ControlLabel = ({lable}:{ lable:string }) => {
    const [state, setState] = useState({
        checked: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ checked: event.target.checked });
    };
    return (
        <FormControlLabel 
            control={
                <Checkbox
                    style={{ color: "#0082CA" }}
                    className="color-check"
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                    color="primary"
                />
            }
            label={lable}
        />
    );
};

export default ControlLabel;