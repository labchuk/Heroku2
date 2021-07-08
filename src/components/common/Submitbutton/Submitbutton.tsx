import React, {useState} from 'react';
import {Button, Backdrop, CircularProgress, makeStyles} from "@material-ui/core"
import "./Submitbutton.scss";
import Spinner from '../spinner/Spinner';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#ffffff",

    },
}))

const Submitbutton = ({name,  handleClick, classN}:{name:string, handleClick:any, classN:string}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
     
    const handleToggle = (e:any) => {
        setOpen(!open);
        handleClick(e);
    };
    return (
        <>
            <Button variant="contained" onClick={(e)=>handleToggle(e)} className={`${classes.root} ${classN}`}>
                {name}
            </Button>
            <Spinner handleClose={()=>setOpen(false)} open={open}/>
      </>
    );
};

export default Submitbutton;