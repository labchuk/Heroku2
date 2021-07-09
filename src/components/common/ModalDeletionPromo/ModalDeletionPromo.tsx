import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);



export default function ModalDeletionPromo(props: any) {

    const classes = useStyles();


    const handleAction = () => {
       props.action();
       props.setModalState(false);
    };

    const handleClose = () => {
        props.setModalState(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.modalState}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.modalState}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Are you sure?</h2>
                        <p id="transition-modal-description">Deleted promo will not be recoverable!</p>
                        <Button variant="contained"
                                color="primary"
                                onClick={handleAction}
                        >
                            Confirm
                        </Button>
                        <Button variant="contained"
                                color="primary"
                        onClick={handleClose}
                        >
                            Cancel
                        </Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}




