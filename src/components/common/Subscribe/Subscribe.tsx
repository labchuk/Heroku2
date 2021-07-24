
import { Button, ListItem } from '@material-ui/core';
import { Drawer, List } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState} from 'react';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import { t } from 'ttag';
import { useAppSelector, useAppDispatch } from "../../../store/Redux-toolkit-hook";
import AdminSelect from "../../admin/AdminSelect";
import {firsLetterToUpperCase} from "../../../helpers/functionHelpers"
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';
import {getSubCategoryAll} from "../../../http/filtersApi";

interface Idiscount {
  name: any;
  vendorId: any;
  fullDescription: any;
  isOnline: boolean;
  imageLink: any;
  startDate: string;
  endDate: string;
  subCategoryIds: string[];
  locationIds: string[];
  categoryId: string;
  percentage?: number | undefined;
}


const Subscribe = () => {

const [state, setState] = useState(false)
  const toggleDrawer = (open: any) => (event: any) => {
    setState(open);
  }

  const useStyles = makeStyles({
    root: {
      "& .MuiButton-root:hover": {
        backgroundColor: 'none'
      }
    },
    wrapper: {
      background: '#F7F9FB',
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
    checkbox__wrapper: {
      marginBottom: 30,
      position: 'relative',
    },
    checkbox: {
      width: 20,
      height: 20,
      marginRight: 5,
      top: 4,
    },
    checkbox__label: {
      marginTop: 2,
      position: 'absolute',
      fontSize: 16,
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
    tags: {
      marginBottom: 12
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
    adminModalButton: {
      fontSize: 16,
      color: '#1877F2',
      background: 'transparent',
      '&:hover': {
        background: 'none'
      }
    },
    address: {
      marginBottom: 15
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
    uploadFile__span: {
      fontSize: '15px',
      marginBottom: '20px'
    },
    form: {
      width: '700px'
    },
    marginBottom10: {
      marginBottom: 10,
      width: '100%'
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
    },
  })
    const styles = useStyles();
    const { category, vendorLocation, vendor,  subCategory, subscribe} = useAppSelector(state => state.filters);
    
    const categoryArr = category?.filter((item: any) => item.deleted === false).map(item => firsLetterToUpperCase(item.name));
    const [choeseCategory,setChoeseCategory] = useState(subscribe?.choeseCategory ? subscribe?.choeseCategory: [])

    const vendorsArr = vendor?.map(item => firsLetterToUpperCase(item.name));
    const [choeseVendors ,setVendors] = useState(subscribe?.vendors ? subscribe?.vendors: [""])

    const subCategoryArr = subCategory?.filter((item: any) => item.deleted === false).map(item => firsLetterToUpperCase(item.name));
    const [choeseSubCategory,setSubChoeseCategory] = useState(subscribe?.choeseSubCategory ? subscribe?.choeseSubCategory: [""])

    const arrCountry = vendorLocation?.map(item=>firsLetterToUpperCase(item.country));
    const [choeseCountry,setCountry] = useState(subscribe?.choeseCountry ? subscribe?.choeseCountry: [""])

    const arrCity = vendorLocation?.map(item=>firsLetterToUpperCase(item.city));
    const [choeseCity,setCity] = useState(subscribe?.choeseCity ? subscribe?.choeseCity: [""]);

    const [openSuccessSnackbar, setSuccessSnackbar] = React.useState(false);
    const [openErrorSnackbar, setErrorSnackbar] = React.useState(false);

    const uniqueArr = (arr:string[]) => Array.from(new Set(arr));
    console.log(category)
    // const getSubCategory = (id) =>{
    //   getSubCategoryAll(id)
    // }
    const list = () => (
    <List className={styles.wrapper}>
      <ListItem>
         <form onSubmit={toggleDrawer(false)} className={styles.form}>
        <Grid container direction='column'>
          <div className={styles.wrapper__title} onClick={toggleDrawer(false)}>
            <KeyboardBackspaceOutlinedIcon style={{ fontSize: 40, position: 'relative', top: 13 }} />
            {t`Back`}
          </div>
          <span className={styles.modal_label}>{t`Your Subscription`}</span>
          
          <AdminSelect
                name={t`Categorys`}
                data={categoryArr}
                multi={true}
                valueArr = {choeseCategory}
                handleChange={setChoeseCategory} />
            {/* { choeseCategory.map((item) => ( 
                <AdminSelect
                name={t`Tags ${item}`}
                data={subCategoryArr}
                multi={true}
                valueArr ={choeseSubCategory}
                handleChange={setSubChoeseCategory} />
                )) } */}
            <AdminSelect
                name={t`Vendors`}
                data={vendorsArr}
                multi={true}
                valueArr ={choeseVendors}
                handleChange={setVendors}/>
            <AdminSelect
                name={t`Country`}
                data={uniqueArr(arrCountry)}
                multi={true}
                valueArr ={choeseCountry}
                handleChange={setCountry}/>
            <AdminSelect
                name={t`City`}
                data={uniqueArr(arrCity)}
                multi={true}
                valueArr ={choeseCity}
                handleChange={setCity} />
            <SimpleSnackbar
              setSnackbar={setErrorSnackbar}
              snackbarState={openErrorSnackbar}
              label='Subscription not added because the server has technical work'
              type='error' />
            <SimpleSnackbar
              setSnackbar={setSuccessSnackbar}
              snackbarState={openSuccessSnackbar}
              label='Subscription is successfully added'
              type='success' />
            
            <Button type='submit' className={styles.submitButton}>{t`Submit`}</Button>
          </Grid>
        </form>
      </ListItem>
    </List>
  )
  return (
    <div>
      <button onClick={toggleDrawer(true)} className={styles.adminModalButton}>{t`My Subscription`}</button>
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




export default Subscribe;