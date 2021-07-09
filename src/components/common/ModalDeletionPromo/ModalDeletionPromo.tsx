import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import './ModalDeletionPromo.scss'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #1877F2',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        title: {
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2rem',
        },
        description: {
            color: 'red',
            fontFamily: 'Poppins, sans-serif',
            paddingBottom: '30px',
        },
        button: {

            marginRight: '20px',
        },
    }),
);




export default function ModalDeletionPromo(props: any){

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
                        <h1 className={classes.title}>Are you sure?</h1>
                        <p className={classes.description}>Deleted promo will not be recoverable!</p>
                        <Button variant="contained"
                                color="primary"
                                onClick={handleAction}
                                className={classes.button}
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




