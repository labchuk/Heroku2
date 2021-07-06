import React, {useState} from 'react';
import {Button, Backdrop, CircularProgress} from "@material-ui/core"
import "./Submitbutton.scss";
import Spinner from '../spinner/Spinner';



const Submitbutton = ({name,  heandekClick, classN}:{name:string, heandekClick:any, classN:string}) => {
    
    const [open, setOpen] = useState(false);
     
    const handleToggle = (e:any) => {
        setOpen(!open);
        heandekClick(e);
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