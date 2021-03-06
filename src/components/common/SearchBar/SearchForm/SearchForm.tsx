import React, { useState , useEffect} from "react";
import "./SearchForm.scss"
import { Search } from "@material-ui/icons";
import {TextField} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {t} from "ttag";
import {setSearchWord} from "../../../../store/filtersStore"
import { useAppDispatch, useAppSelector} from '../../../../store/Redux-toolkit-hook';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        width: 280,
      },
    },
  }),
);

const SearchForm = ({handleClick}:{handleClick:any}) => {
  const dispatch = useAppDispatch();
  const {searchObject} = useAppSelector(state=>state.filters)
    const classes = useStyles();
    const [state, setState] = useState<String>(searchObject.searchWord)
    const click =(e) =>{
      e.preventDefault();
      dispatch(setSearchWord(state));
    } 
    
    return (
      <form action="#"   noValidate autoComplete="off" className={classes.root}>
            <div className="searchForm" >
             <TextField id="outlined-search" label={t`Search`} value={state} type="search" variant="outlined" onChange={(e: React.ChangeEvent<{ value: any }>) => setState(e.target.value)} size="small"/>
             <button  onClick={click}> <Search/> </button> 
             </div>
      </form>
    );
};

export default SearchForm;