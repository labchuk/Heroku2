import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';

export interface State extends SnackbarOrigin {
    open: boolean;
}

export default function PositionedSnackbar(props: { label: string, type: any }) {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>

        </React.Fragment>
    );

    return (
        <div>
            {buttons}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
                autoHideDuration={3000}
            >
                <Alert onClose={handleClose} severity={props.type}>
                    {props.label}
                </Alert>
            </Snackbar>


        </div>
    );
}
