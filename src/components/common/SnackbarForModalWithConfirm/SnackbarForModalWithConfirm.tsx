import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

let successDel = true;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'absolute',
        boxShadow: 'none',
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SnackbarForModalWithConfirm(props: any) {
    const classes = useStyles();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setSnackbar(false);
    };

    return (
        <div className={classes.root}>

            <Snackbar

                open={props.snackbarState} autoHideDuration={3000} onClose={handleClose}>
                { successDel ? (
                    <Alert onClose={handleClose} severity="success">
                        {props.successMessage}
                    </Alert>  )
                 : (<Alert onClose={handleClose} severity="error">
                        {props.errorMessage}
                    </Alert>  )
                }

            </Snackbar>

        </div>
    );
}
