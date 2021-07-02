import React from 'react';
import {Button} from "@material-ui/core"
import "./Submitbutton.scss";

const Submitbutton = ({name,  heandekCklik, classN, isVerified}:{name:string,heandekCklik:any, classN:string, isVerified: boolean}) => {
    return (
        <Button disabled={isVerified} variant="contained" color="primary" onClick={heandekCklik} className={classN} >{name}</Button>
    );
};

export default Submitbutton;