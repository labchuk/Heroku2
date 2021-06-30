import React, { useState } from "react";
import "./SearchForm.scss"
import { Search } from "@material-ui/icons";
import {TextField} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        width: 280,
      },
    },
  }),
);

const SearchForm = () => {
    const classes = useStyles();
    const [data, setData] = useState<string>();
    return (
        <form action="#"   noValidate autoComplete="off" className={classes.root}>
            <div className="searchForm" >
             <TextField id="outlined-search" label="Search" type="search" variant="outlined" onChange={(e: React.ChangeEvent<{ value: any }>) => setData( e.target.value )} size="small"/>
             <button type="submit"> <Search/> </button> 
             </div>
            
            
        </form>
    );
};

export default SearchForm;