import React, {useState} from 'react';
import {Button, Backdrop, CircularProgress} from "@material-ui/core"
import "./Submitbutton.scss";
import Spinner from '../spinner/Spinner';



const Submitbutton = ({name,  handleClick, classN}:{name:string, handleClick:any, classN:string}) => {
    
    const [open, setOpen] = useState(false);
     
    const handleToggle = (e:any) => {
        setOpen(!open);
        handleClick(e);
    };
    return (
        <>
            <Button variant="contained" color="primary" onClick={(e)=>handleToggle(e)} className={classN}>
                {name}
            </Button>
            <Spinner handleClose={()=>setOpen(false)} open={open}/>
      </>
    );
};

export default Submitbutton;