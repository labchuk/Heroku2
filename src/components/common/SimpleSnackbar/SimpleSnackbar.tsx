import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} {...props} />;
}

export default function SimpleSnackbar(props: any) {
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setSnackbar(false);
    };

    return (
        <div>
            <Snackbar
                open={props.snackbarState}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={3000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={props.type}>
                    {props.label}
                </Alert>
            </Snackbar>
        </div>
    );
}