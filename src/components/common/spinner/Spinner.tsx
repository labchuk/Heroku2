import React from 'react';
import {Backdrop, CircularProgress} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const Spinner = ({handleClose, open}:{handleClose:any, open:boolean}) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Spinner;

