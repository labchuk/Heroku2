import { Button, ListItem } from '@material-ui/core';
import { Drawer, List } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef } from 'react';
import DropZone from '../../common/DropZone/DropZone';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import "./DelateVendorMenu.scss";
import AdminPanelVendor from '../AdminPanelVendor/AdminPanelVendor';
import { t } from 'ttag';

const DelateVendorMenu = () => {
    const [state, setState] = React.useState(false);
    const [countryValue, setCountryValue] = React.useState(['']);
    const [cityValue, setCityValue] = React.useState(['']);
    const [addressValue, setAddressValue] = React.useState(['']);
    const [uploadFileName, setUploadFileName] = React.useState('');
    const parentRef = useRef<any>();
    const [vendors, setVendor] = React.useState([
        {
            id: 1,
            name: "Nike",
            country: "Ukraine",
            city: "Lviv",
            address: "Horodotska Str, 16",
            email: "company.nike@gmail.com",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, ab odit delectus suscipit dignissimos nemo accusamus repellat eius ipsum excepturi optio quis eligendi in ullam nobis sapiente officia vero!",
            image: 'logo1.jpg',
            editing: false
        },
        {
            id: 2,
            name: "Puma",
            country: "Belarus",
            city: "Minsk",
            address: "Horodotska Str, 16",
            email: "company.puma@gmail.com",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, ab odit delectus suscipit dignissimos nemo accusamus repellat eius ipsum excepturi optio quis eligendi in ullam nobis sapiente officia vero!",
            image: 'logo1.jpg',
            editing: false
        },
        {
            id: 3,
            name: "Zara",
            country: "Ukraine",
            city: "Lviv",
            address: "Horodotska Str, 16",
            email: "company.zara@gmail.com",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, ab odit delectus suscipit dignissimos nemo accusamus repellat eius ipsum excepturi optio quis eligendi in ullam nobis sapiente officia vero!",
            image: 'logo1.jpg',
            editing: false
        },
        {
            id: 4,
            name: "Domino's",
            country: "Ukraine",
            city: "Lviv",
            address: "Horodotska Str, 16",
            email: "company.dominos@gmail.com",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, ab odit delectus suscipit dignissimos nemo accusamus repellat eius ipsum excepturi optio quis eligendi in ullam nobis sapiente officia vero!",
            image: 'logo1.jpg',
            editing: false
        },
    ]);
    const address = [
        'Chornovola Str, 27',
        'Yakuba Kolasa Str, 37',
        'Horodotska Str, 7a',
        'Rynok Sqr, 1',
        'Mazepy Str, 1a',
        'Warshavska Str, 127',
    ];

    const countries = ['Ukraine', 'Belarus', 'USA'];
    const cities = ['Lviv', 'Minsk', 'Kharkiv'];

    const [category, setCategory] = React.useState([
        { title: 'Category 1' },
        { title: 'Category 2' },
        { title: 'Category 3' },
        { title: 'Category 4' },
        { title: 'Category 5' },
    ]);

    const [tags, setTag] = React.useState([
        { title: 'Tag 1' },
        { title: 'Tag 2' },
        { title: 'Tag 3' },
        { title: 'Tag 4' },
        { title: 'Tag 5' },
    ]);

    //   const vendors = [
    //     { title: 'Nike' },
    //     { title: 'Puma' },
    //     { title: `Domino's` },
    //     { title: 'Zara' },
    //     { title: 'Steam' },
    //   ];

    //   const country = [
    //     { title: 'Ukraine' },
    //     { title: 'USA' },
    //     { title: 'Belarus' },
    //   ];

    // const city = [
    //     { title: 'Lviv' },
    //     { title: 'Minsk' },
    //     { title: 'Kyiv' },
    //     { title: 'Herson' },
    // ];

    const city = [
        'Lviv',
        'Minsk',
        'Kyiv',
        'Herson',
    ];

    const toggleDrawer = (open: any) => (event: any) => {
        setState(open);
    }

    const handleChangeCountry = (event: any) => {
        setCountryValue(event.target.value)
    }

    const handleChangeCity = (event: any) => {
        setCityValue(event.target.value)
    }

    const handleChangeAddress = (event: any) => {
        setAddressValue(event.target.value)
    }

    const deleteVendor = (id: number) => {
        let removedArr = vendors.filter((item) => item.id !== id);
        setVendor(removedArr);
    }

    const editVendor = (id: number) => {
        let edits: any = vendors.map((item: any) => {
            if (item.id === id) {
                item.editing = !item.editing
            }
            return item;
        })
        setVendor(edits)
    }

    const submitEditVendor = (v: any) => {
        let edits: any = vendors.map((item: any) => {
            if (item.id === v.id) {
                item.editing = false
            }
            return item;
        })
        setVendor(edits)
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
        attention: {
            fontSize: 16,
            color: '#d32f2f',
            marginBottom: 10
        },
        attention__span: {
            position: 'relative',
            bottom: 9,
            left: 5,
            lineHeight: 1.5
        },
        vendorName: {
            fontSize: 16,
            border: 'none',
            borderBottom: '1px solid #D9D9D9',
            padding: '15px 15px 5px 10px',
        },
        vendor__icons: {
            posotion: 'absolute',
            float: 'right'
        },
        editingForm: {
            display: 'grid',
            width: '100%',
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
            width: '250px',
            marginTop: 10
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
        adminPanel: {
            marginTop: 20,
            paddingTop: 3,
            paddingBottom: 7,
            width: 200,
            background: 'transparent',
            border: '2px solid #1877F2'
        },
        modal_label: {
            textAlign: 'center',
            marginBottom: 15,
        },
        address_submit: {
            position: 'relative',
            left: 0,
            border: '2px solid #1877F2',
            color: '#1877F2',
            width: '250px'
        },
        address_cancel: {
            position: 'relative',
            left: 0,
            border: '2px solid #C4C4C4',
            width: '250px',
        },
        addressButtons: {
            display: "flex",
            gridGap: 20,
            marginBottom: 15
        },
        marginBottom10: {
            marginBottom: 10,
            width: '100%'
        },
        form: {
            width: '700px'
        },
        uploadFile__span: {
            fontSize: '15px',
            marginBottom: '20px'
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
                        <KeyboardBackspaceOutlinedIcon style={{ fontSize: 40, position: 'relative', top: 11 }} />
                        {t`Back`}
                    </div>
                    <span className={styles.modal_label}>{t`Vendors`}</span>
                    <div className={styles.attention}>
                        <ErrorOutlineIcon style={{ color: '#d32f2f', fontSize: 30 }} />
                        <span className={styles.attention__span}>{t`Removing a vendor will delete all its discounts`}</span>
                    </div>
                    {vendors.map((value: any) => {
                        return <div className={styles.vendorName}>
                            {value.name}
                            <section className={styles.vendor__icons}>
                                <EditIcon onClick={() => { editVendor(value.id) }}
                                    style={{ fontSize: 22, marginRight: 5, position: 'relative', bottom: 4 }} />
                                <DeleteOutlineIcon onClick={() => { deleteVendor(value.id) }}
                                    style={{ color: '#d32f2f', fontSize: 22, position: 'relative', bottom: 4 }} />
                            </section>
                            {value.editing ? (
                            <form onSubmit={toggleDrawer(false)}>
                                <div className={styles.editingForm}>
                                    <TextField className={styles.marginBottom} required defaultValue={value.name} label={t`Name`} />
                                    <FormControl>
                                        <InputLabel></InputLabel>
                                        <Select value={countryValue}
                                            required
                                            multiple
                                            defaultValue={value.country}
                                            onChange={handleChangeCountry}
                                            className={styles.marginBottom}
                                            displayEmpty>
                                            {countries.map((country: string) => {
                                                return <MenuItem value={country}>{country}</MenuItem>
                                            })}
                                            <MenuItem value=''>{value.country}</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel></InputLabel>
                                        <Select value={cityValue}
                                            required
                                            multiple
                                            onChange={handleChangeCity}
                                            className={styles.marginBottom}
                                            displayEmpty>
                                            {cities.map((city: string) => {
                                                return <MenuItem value={city}>{city}</MenuItem>
                                            })}
                                            <MenuItem value=''>{value.city}</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <TextField className={styles.marginBottom} defaultValue={value.address} label="Address" /> */}
                                    {/* <AutocompleteMultipleChoise data={address} lab='Address' /> */}
                                    <FormControl>
                                        <InputLabel></InputLabel>
                                        <Select value={addressValue}
                                            required
                                            multiple
                                            defaultValue={value.address}
                                            onChange={handleChangeAddress}
                                            className={styles.marginBottom}
                                            displayEmpty>
                                            {address.map((address: string) => {
                                                return <MenuItem value={address}>{address}</MenuItem>
                                            })}
                                            <MenuItem value=''>{value.address}</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField className={styles.marginBottom} required defaultValue={value.email} label={t`E-mail`} />
                                    <TextField className={styles.marginBottom}
                                        required
                                        multiline
                                        rows={5}
                                        label={t`Description`}
                                        variant="outlined"
                                        defaultValue={value.description} />
                                  <div className={styles.dropzone}>
                                            <DropZone uploadPhoto={(image: any) => { setUploadFileName(image) }} />
                                        </div>
                                        <div className={styles.uploadPhotoMobile}>
                                            <button type='button' className={styles.uploadFile__btn}>Upload photo</button>
                                        </div>
                                        <span className={styles.uploadFile__span}>{uploadFileName}</span>
                                    <div className={styles.addressButtons}>
                                        <Button type='submit onClick={() => { submitEditVendor(value) }} className={styles.address_submit}>{t`Submit`}</Button>
                                        <Button onClick={() => { submitEditVendor(value) }} className={styles.address_cancel}>{t`Cancel`}</Button>
                                    </div>
                                </form>
                            ) : ''}
                        </div>
                    })}
                    <button className={styles.adminPanel}>
                        <AdminPanelVendor />
                    </button>
                </Grid>
            </ListItem>
        </List>
    )
    return (
        <div>
            <button onClick={toggleDrawer(true)} className={styles.adminModalButton}>{t`Vendors`}</button>
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

export default DelateVendorMenu;