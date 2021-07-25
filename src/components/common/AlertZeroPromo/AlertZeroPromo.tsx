import React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function AlertZeroPromo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="info">No results found for your request. Please try again with other search options!</Alert>
        </div>
    );
}
