import { Button, ListItem } from '@material-ui/core';
import { Drawer, List } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef } from 'react';
import DropZone from '../../common/DropZone/DropZone';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import "./AdminPanelVendor.scss";
import AutocompleteMultipleChoise from '../../common/AutocompleteMultipleChoise/AutocompleteMultipleChoise';
import { t } from 'ttag';

const AdminPanelVendor = () => {
    const [state, setState] = React.useState(false);
    const [countryValue, setCountryValue] = React.useState('');
    const [cityValue, setCityValue] = React.useState('');
    const [uploadFileName, setUploadFileName] = React.useState('');
    const [disableInput, setDisableInput] = React.useState(false);
    const [addressInput, setAddressInput] = React.useState(false);
    const [newAddress, setNewAddress] = React.useState('');
    const parentRef = useRef<any>();

    const country = [
        { title: 'Ukraine' },
        { title: 'USA' },
        { title: 'Belarus' },
    ];

    const city = [
        { title: 'Lviv' },
        { title: 'Minsk' },
        { title: 'Kyiv' },
        { title: 'Herson' },
    ];

    const [address, setAddress] = React.useState([
        { title: 'Chornovola Str, 27' },
        { title: 'Yakuba Kolasa Str, 37' },
        { title: 'Horodotska Str, 7a' },
        { title: 'Rynok Sqr, 1' },
        { title: 'Mazepy Str, 1a' },
        { title: 'Warshavska Str, 127' },
    ]);

    const toggleDrawer = (open: any) => (event: any) => {
        setState(open);
    }

    const handleChangeCountry = (event: any) => {
        setCountryValue(event.target.value)
    }

    const handleChangeCity = (event: any) => {
        setCityValue(event.target.value)
    }

    const addAddress = () => {
        setAddressInput(true)
    }

    const submitAddress = () => {
        setAddressInput(false);
        let addNewAddress = address.concat({ title: newAddress });
        setAddress(addNewAddress)
    }

    const cancelAddress = () => {
        setAddressInput(false);
    }

    const useStyles = makeStyles({
        root: {
            "& .MuiDrawerPaper-root": {
                background: '#F7F9FB',
            },
            "& .MuiButton-root:hover": {
                backgroundColor: 'none'
            }
        },
        wrapper: {
            height: '100%',
            width: 700,
            paddingRight: 25,
            paddingLeft: 25,
            fontFamily: 'Poppins',
            fontSize: 24,
        },
        wrapper__title: {
            margitTop: 50,
            marginBottom: 20,
            bottom: 20,
            cursor: 'pointer',
        },
        marginBottom: {
            marginBottom: 15
        },
        dropzone: {
            border: '1px solid #ced4da',
            fontSize: 14,
            paddingTop: 30,
            cursor: 'pointer',
            color: '#ced4da',
            borderRadius: 4,
            fontFamily: 'Poppins',
            textAlign: 'center',
            marginBottom: 20,
            '&:hover': {
                border: '1px solid black'
            }
        },
        submitButton: {
            position: 'relative',
            left: 0,
            border: '2px solid #1877F2',
            color: '#1877F2',
            width: '250px'
        },
        adminModalButton: {
            fontSize: 16,
            color: '#1877F2',
            background: 'transparent',
            '&:hover': {
                background: 'none'
            }
        },
        uploadPhotoMobile: {
            display: 'none',
        },
        fileName: {
            width: 135,
            height: 38,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
        },
        uploadFile__btn: {
            background: 'transparent',
            color: '#1877F2',
            padding: '10px 20px',
            border: '2px solid #1877F2'
        },
        uploadedFileName: {
            fontSize: 14,
            marginTop: '-14px',
            marginBottom: 20
        },
        modal_label: {
            textAlign: 'center'
        },
        address__span: {
            fontSize: 15,
            marginBottom: 20,
            cursor: 'pointer',
        },
        address_submit: {
            position: 'relative',
            left: 0,
            border: '2px solid #1877F2',
            color: '#1877F2',
            width: '130px'
        },
        address_cancel: {
            position: 'relative',
            left: 0,
            border: '2px solid #C4C4C4',
            width: '130px',
        },
        addressButtons: {
            display: "flex",
            gridGap: 20,
            marginBottom: 15
        },
        '@media(max-width:700px)': {
            wrapper: {
                width: '320px'
            },
            dropzone: {
                display: 'none'
            },
            uploadPhotoMobile: {
                display: 'flex',
                marginBottom: 20,
                fontSize: 15,
                'span': {
                    position: 'relative'
                }
            },
            modal_label: {
                fontSize: 18,
            },
            wrapper__title: {
                fontSize: 20
            },
            addressButtons: {
                gridGap: 10,
                flexDirection: 'column'
            },
            address_submit: {
                width: '100%'
            },
            address_cancel: {
                width: '100%'
            }
        }
    })

    const styles = useStyles();

    const list = () => (
        <List className={styles.wrapper}>
            <ListItem>
                <Grid container direction='column'>
                    <div className={styles.wrapper__title} onClick={toggleDrawer(false)}>
                        <KeyboardBackspaceOutlinedIcon style={{ fontSize: 40, position: 'relative', top: 13 }} />
                        {t`Back`}
                    </div>
                    <span className={styles.modal_label}>{t`Add a vendor`}</span>
                    <TextField className={styles.marginBottom} id="outlined-basic" label={t`Name`} />
                    {disableInput ? '' : (
                        <>
                            <AutocompleteMultipleChoise data={country} lab={t`Country`} />
                            <AutocompleteMultipleChoise data={city} lab={t`City`} />
                            <AutocompleteMultipleChoise data={address} lab={t`Address`} />
                            {addressInput ?
                                <>
                                    <TextField className={styles.marginBottom} label={t`Add an address`} onChange={(e: any) => setNewAddress(e.target.value)} />
                                    <div className={styles.addressButtons}>
                                        <Button onClick={submitAddress} className={styles.address_submit}>{t`Submit`}</Button>
                                        <Button onClick={cancelAddress} className={styles.address_cancel}>{t`Cancel`}</Button>
                                    </div>
                                </>
                                : <span className={styles.address__span} onClick={addAddress}>{t`+ Add new address`}</span>}
                        </>
                    )}
                    <TextField className={styles.marginBottom} id="outlined-basic" label={t`E-mail`} />
                    <TextField className={styles.marginBottom} multiline rows={5} id="outlined-basic" label={t`Description`} variant="outlined" />
                    <div className={styles.dropzone}>
                        <DropZone wrapperHeight={100} />
                    </div>
                    <div className={styles.uploadPhotoMobile}>
                        <input type="file"
                            ref={parentRef}
                            className={styles.fileName}
                            id='fileName'
                            accept=".png, .jpg, .jpeg"
                            onChange={(e) => { setUploadFileName(parentRef.current.files[0].name) }} />
                        <button className={styles.uploadFile__btn}>{t`Upload photo`}</button>
                    </div>
                    <span className={styles.uploadedFileName}>{uploadFileName}</span>
                    <Button onClick={toggleDrawer(false)} className={styles.submitButton}>{t`Submit`}</Button>
                </Grid>
            </ListItem>
        </List>
    )
    return (
        <div>
            <button onClick={toggleDrawer(true)} className={styles.adminModalButton}>{t`Add a vendor`}</button>
            <Drawer anchor={'right'}
                open={state}
                onClose={toggleDrawer(false)}>
                <div>
                    {list()}
                </div>
            </Drawer>
        </div>
    );
};

export default AdminPanelVendor;