import { ListItem } from '@material-ui/core';
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
import "./DelateVendorMenu.scss";

const DelateVendorMenu = () => {
    const [state, setState] = React.useState(false);
    const [countryValue, setCountryValue] = React.useState('');
    const [cityValue, setCityValue] = React.useState('');
    const [uploadFileName, setUploadFileName] = React.useState('');
    const [isEdit, setEdit] = React.useState(false);
    const parentRef = useRef<any>();
    const [vendors, setVendor] = React.useState([
        { id: 1, 
            name: "Nike", 
            country: "Ukraine", 
            city: "Lviv", 
            address: "Horodotska Str, 16", 
            email: "company.nike@gmail.com",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, ab odit delectus suscipit dignissimos nemo accusamus repellat eius ipsum excepturi optio quis eligendi in ullam nobis sapiente officia vero!",
            image: 'logo1.jpg'
        },
        { id: 2, 
            name: "Puma", 
            country: "Belarus", 
            city: "Minsk", 
            address: "Horodotska Str, 16", 
            email: "company.puma@gmail.com",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, ab odit delectus suscipit dignissimos nemo accusamus repellat eius ipsum excepturi optio quis eligendi in ullam nobis sapiente officia vero!",
            image: 'logo1.jpg'
        },
        { id: 3, 
            name: "Zara", 
            country: "Ukraine", 
            city: "Lviv", 
            address: "Horodotska Str, 16", 
            email: "company.zara@gmail.com",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, ab odit delectus suscipit dignissimos nemo accusamus repellat eius ipsum excepturi optio quis eligendi in ullam nobis sapiente officia vero!",
            image: 'logo1.jpg'
        },
        { id: 4, 
            name: "Domino's", 
            country: "Ukraine", 
            city: "Lviv", 
            address: "Horodotska Str, 16", 
            email: "company.dominos@gmail.com",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, ab odit delectus suscipit dignissimos nemo accusamus repellat eius ipsum excepturi optio quis eligendi in ullam nobis sapiente officia vero!",
            image: 'logo1.jpg'
        },
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

    const deleteVendor = (id: number) => {
        let removedArr = vendors.filter((item) => item.id !== id);
        setVendor(removedArr);
    }

    
    const editVendor = (id: number) => {
        console.log(id);
        setEdit(!isEdit);
    }



    const useStyles = makeStyles({
        root: {
            "& .MuiDrawerPaper-root": {
                background: '#F7F9FB',
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
            textAlign: 'right'
        },
        attention: {
            fontSize: 16,
            color: '#d32f2f',
            marginBottom: 10
        },
        attention__span: {
            position: 'relative',
            bottom: 9,
            left: 5
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
            height: 40,
            width: 200,
            background: 'linear-gradient(to right, #1877F2, #1815BE)',
            color: 'white',
            fontSize: 15,
            transition: 'background 0.3s linea',
            '&:hover': {
                background: 'linear-gradient(to right, #194ddb, #0d0b69)',
            }
        },
        adminModalButton: {
            fontSize: 16,
            color: '#1877F2',
            background: 'transparent',
            '&:hover': {
                background: 'none'
            }
        },
        uploadPhotoMobile: {
            display: 'none',
        },
        fileName: {
            width: 135,
            height: 38,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',    
        },
        uploadFile__btn: {
            background: 'transparent',
            color: '#1877F2',
            padding: '10px 20px',
            border: '2px solid #1877F2'
        },
        uploadedFileName: {
            fontSize: 14,
            marginTop: '-14px',
            marginBottom: 20
        },
        '@media(max-width:700px)': {
            wrapper: {
                width: '100%'
            },
            dropzone: {
                display: 'none'
            },
            uploadPhotoMobile: {
                display: 'flex',
                marginBottom: 20,
                fontSize: 15,
                'span': {
                    position: 'relative'
                }
            }
        }
    })

    const styles = useStyles();

    const list = () => (
        <List className={styles.wrapper}>
            <ListItem>
                <Grid container direction='column'>
                    <span className={styles.wrapper__title} onClick={toggleDrawer(false)}>
                        <img src="/src/images/icons/back-arrow.svg" alt=""/>
                        Back
                    </span>
                    <div className={styles.attention}>
                        <ErrorOutlineIcon style={{ color: '#d32f2f', fontSize: 30 }}/>
                        <span className={styles.attention__span}>Removing a vendor will delete all its discounts</span>
                    </div>
                    {vendors.map((value) => {
                        return <div className={styles.vendorName}>
                                    {value.name}
                                    <section className={styles.vendor__icons}>
                                        <EditIcon onClick={() => {editVendor(value.id)}}
                                                style={{ fontSize: 22, marginRight: 5, position: 'relative', bottom: 4 }}/>
                                        <DeleteOutlineIcon onClick={() => {deleteVendor(value.id)}}
                                                            style={{ color: '#d32f2f', fontSize: 22, position: 'relative', bottom: 4 }}/>
                                    </section>
                                    {isEdit ? (
                                        <div className={styles.editingForm}>
                                            <TextField className={styles.marginBottom} defaultValue={value.name} label="Name" />
                                            <FormControl>
                                                <InputLabel>Country</InputLabel>
                                                <Select value={countryValue}
                                                        defaultValue={value.country}
                                                        onChange={handleChangeCountry}
                                                        className={styles.marginBottom}>
                                                    <MenuItem value={'Ukraine'}>Ukraine</MenuItem>
                                                    <MenuItem value={'Belarus'}>Belarus</MenuItem>
                                                    <MenuItem value={'USA'}>USA</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl>
                                                <InputLabel>City</InputLabel>
                                                <Select value={cityValue}
                                                        onChange={handleChangeCity}
                                                        className={styles.marginBottom}>
                                                    <MenuItem value={'Lviv'}>Lviv</MenuItem>
                                                    <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
                                                    <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <TextField className={styles.marginBottom} defaultValue={value.address} label="Address" />
                                            <TextField className={styles.marginBottom} defaultValue={value.email} label="E-mail" />
                                            <TextField className={styles.marginBottom} 
                                                        multiline 
                                                        rows={5}  
                                                        label="Description" 
                                                        variant="outlined"
                                                        defaultValue={value.description}/>
                                            <div className={styles.dropzone}>
                                                <DropZone wrapperHeight={100} />
                                            </div>
                                            <div className={styles.uploadPhotoMobile}>
                                                <input type="file" 
                                                        ref={parentRef} 
                                                        className={styles.fileName} 
                                                        id='fileName' 
                                                        accept=".png, .jpg, .jpeg" 
                                                        onChange={(e)=>{setUploadFileName(parentRef.current.files[0].name)}}/>
                                                <button className={styles.uploadFile__btn}>Change photo</button>
                                            </div>
                                            <span className={styles.uploadedFileName}>{uploadFileName}</span>
                                            <button className={styles.submitButton} onClick={()=>{setEdit(false)}}>Submit</button>
                                        </div>
                                    ) : ''}
                                </div>
                    })}










                </Grid>
            </ListItem>
        </List>
    )
    return (
    <div>
        <button onClick={toggleDrawer(true)} className={styles.adminModalButton}>Vendors</button>
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