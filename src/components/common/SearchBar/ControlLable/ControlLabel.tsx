import React, { useState } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";




const ControlLabel = ({lable, setStateControlLableMy,  }:{ lable:string, setStateControlLableMy:any }) => {
    const [state, setState] = useState({
        checked: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ checked: event.target.checked });
        setStateControlLableMy(lable, event.target.checked)
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