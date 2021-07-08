import React,{useState} from 'react';
import { Drawer, } from '@material-ui/core';
import { SearchBar } from '..';
import { t } from 'ttag';
import "./ModalSearchBar.scss"
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
           backgroundColor: theme.palette.secondary.main,
           borderColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.contrastText,
            '&:hover':{
               backgroundColor: theme.palette.primary.main
            }
        },
    }),
);


const ModalSearchBar = () => {
    const classes = useStyles()
    const [state, setState] = useState(false);
    const toggleDrawer = (open: any) => (event: any) => {
    setState(open);
  }

    return (
        <div>
          <button className={`btn_open ${classes.root}`} onClick={toggleDrawer(true)}> {t`Open filter`}</button>
          <Drawer anchor={'left'}
                  open={state}
                  onClose={toggleDrawer(false)}>
            <div>
            <SearchBar />
            </div>
          </Drawer>
        </div>
    );
};

export default ModalSearchBar;