import { Checkbox, Chip, ListItem, Snackbar, SnackbarOrigin } from '@material-ui/core';
import { Drawer, List } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef, useState, useEffect } from 'react';
import DropZone from '../../common/DropZone/DropZone';
import ContainerDataPiker from '../../common/SearchBar/ContainerDatePiker/ContainerDatePiker';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import Button from '@material-ui/core/Button';
import "./AdminPanelCard.scss";
import { t } from 'ttag';
import AdminSelect from '../AdminSelect';
import { Alert } from '@material-ui/lab';
import {getVendorId, postCategory, postVendorLocation} from "../../../http/filtersApi"
import {useAppSelector, useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {firsLetterToUpperCase} from "../../../helpers/functionHelpers";
import { utimes } from 'fs';
import { captureRejectionSymbol } from 'stream';
import { saveLocale, locale } from '../../../components/common/LangSwitcher/i18nInit';
interface State extends SnackbarOrigin {
  open: boolean;
}




interface ChipData {
  key: number;
  country: string,
  city: string,
  address: string,
}

interface Idiscount{
    name: string;
    vendorId: string;
    fullDescription: string;
    isOnline:boolean;
    imageLink:string;
    startDate:string;
    endDate: string;
    subCategoryIds: string[];
    locationIds: string[];
    categoryId: string;
    percentage: number;
}



const AdminPanelCard = () => {
  const {category, vendorLocation, vendor,  searchObject} = useAppSelector(state=>state.filters);
  const [state, setState] = React.useState(false);
  const [disableInput, setDisableInput] = React.useState(false);
  const [addressInput, setAddressInput] = React.useState(false);
  const [categoryInput, setCategoryInput] = React.useState(false);
  const [tagInput, setTagInput] = React.useState(false);
  const [uploadFileName, setUploadFileName] = React.useState();
  const [newCategory, setNewCategory] = React.useState('');
  const [newTag, setNewTag] = React.useState('');
  const [fileName, setFileName] = React.useState<string | Blob>('');
  const [choeseCategory, setChoeseCategory] = React.useState('');
  const [choeseVendor, setChoeseVendor] = React.useState('');
  const [choeseTag, setChoeseTag] = React.useState([]);
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [isOnline, setIsOnline] = React.useState(false);
  const [location, setLocation] = React.useState<any[]>([]);
  const [time, setTime] = useState();
  const [newLocation, setNewLocation] = React.useState({
    newCountry: '',
    newCity: '',
    newAddress: '',
  });


  const handleKeyDownForTitle = (event: any): void => {
    if (locale === 'en') {
      if (event.keyCode === 65) {
        (event.shiftKey) ? (event.target.value = event.target.value + 'A') : (event.target.value = event.target.value + 'a');
        setTimeout(() => {event.target.focus()}, 0);
        setTitle(event.target.value);
      }
    } else {
      return;
    }
   };

  const handleKeyDownForCategory = (event: any): void  => {
    if (locale === 'en') {
      if (event.keyCode === 65) {
        (event.shiftKey) ? (event.target.value = event.target.value + 'A') : (event.target.value = event.target.value + 'a');
         setTimeout(() => {event.target.focus()}, 0);
        setNewCategory(event.target.value);
      }
    } else {
      return;
    }
    };

  const handleKeyDownForTag = (event: any): void  => {
    if (locale === 'en') {
      if (event.keyCode === 65) {
        (event.shiftKey) ? (event.target.value = event.target.value + 'A') : (event.target.value = event.target.value + 'a');
        setTimeout(() => {event.target.focus()}, 0);
        setNewTag(event.target.value);
      }
    } else {
      return;
    }};

  const handleKeyDownForCountry = (event: any): void  => {
    if (locale === 'en') {
      if (event.keyCode === 65) {
        (event.shiftKey) ? (event.target.value = event.target.value + 'A') : (event.target.value = event.target.value + 'a');
        setTimeout(() => {event.target.focus()}, 0);
        setNewLocation({ ...newLocation, newCountry: event.target.value });
      }
    } else {
      return;
    }};

  const handleKeyDownForCity = (event: any): void  => {
    if (locale === 'en') {
      if (event.keyCode === 65) {
        (event.shiftKey) ? (event.target.value = event.target.value + 'A') : (event.target.value = event.target.value + 'a');
        setTimeout(() => {event.target.focus()}, 0);
        setNewLocation({ ...newLocation, newCity: event.target.value })
      }
    } else {
      return;
    }};

  const handleKeyDownForAddress = (event: any): void  => {
    if (locale === 'en') {
      if (event.keyCode === 65) {
        (event.shiftKey) ? (event.target.value = event.target.value + 'A') : (event.target.value = event.target.value + 'a');
        setTimeout(() => {event.target.focus()}, 0);
        setNewLocation({ ...newLocation, newAddress: event.target.value });
      }
    } else {
      return;
    }};

  const handleKeyDownForDescription = (event: any): void  => {
    if (locale === 'en') {
      if (event.keyCode === 65) {
        (event.shiftKey) ? (event.target.value = event.target.value + 'A') : (event.target.value = event.target.value + 'a');
        setTimeout(() => {event.target.focus()}, 0);
        setDescription(event.target.value);
      }
    } else {
      return;
    }};





  const categoryArr = category?.filter((item: any)=> item.deleted === false).map(item=> firsLetterToUpperCase(item.name));
  const [categoryState, setcategoryState] = React.useState([...categoryArr]);
  const getVendorId = () => (vendor.filter(item=> item.name === choeseVendor).map(item => item.id))[0];

  useEffect(()=>{
    setLocation([])
    const choeseLocation = vendorLocation.filter(item => item.vendorId === getVendorId());
    choeseLocation?.forEach(item=>{
      if(item.deleted){return};
      setLocation([...location, { key: Math.random(), country: item.country, city: item.city, address: item.addressLine }])
    })
  },[choeseVendor]);



  const [tags, setTag] = React.useState([
    'Tag 1',
    'Tag 2',
    'Tag 3',
    'Tag 4',
  ]);

  const vendors = vendor?.map(item=>firsLetterToUpperCase(item.name));


  const addDiscount = () => {
    handleClickAlert()
    createDiscount()
  }

  const toggleDrawer = (open: any) => (event: any) => {
    setState(open);
  }

  let changeDisable = () => {
    setIsOnline(!isOnline)
    setDisableInput(!disableInput)
  }

  const addAddress = () => {
    setAddressInput(true)
  }

  const submitAddress = () => {
    if (newLocation.newCountry !== '' && newLocation.newCity !== '' && newLocation.newAddress !== '') {
      setLocation([...location, { key: Math.random(), country: newLocation.newCountry, city: newLocation.newCity, address: newLocation.newAddress }])
      setNewLocation({
        newCountry: '',
        newCity: '',
        newAddress: '',
      })
      postVendorLocation({country: newLocation.newCountry, city: newLocation.newCity, addressLine: newLocation.newAddress , vendorId: getVendorId()})
    }
  }

  const cancelAddress = () => {
    setAddressInput(false);
  }

  const addCategory = () => {
    setCategoryInput(true)
  }
  const submitCategory = async() => {
    setCategoryInput(false);
    const {status} = await postCategory({name:newCategory})
    if(status>=200 && status <=299){
      let addNewCategory = category.concat(newCategory);
      setcategoryState(addNewCategory)
    }
  }

  const cancelCategory = () => {
    setCategoryInput(false);
  }

  const addTag = () => {
    setTagInput(true)
  }

  const submitTag = () => {
    setTagInput(false);
    let addNewTag = tags.concat(newTag);
    setTag(addNewTag)
  }

  const cancelTag = () => {
    setTagInput(false);
  }


  const setImage = (image: any) => {
    setFileName(image)
    setUploadFileName(image.name)
  }

  const useStyles = makeStyles({
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
      color: "#0082CA"
    },
    checkbox__label: {
      position: 'relative',
      fontSize: 16,
      bottom: 5
    },
    marginBottom: {
      marginBottom: 15,
      width: '100%'
    },
    marginBottom10: {
      marginBottom: 10,
      width: '100%'
    },
    dropzone: {
      border: '1px solid #ced4da',
      fontSize: 14,
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
    submitButton__disabled: {
      border: '2px solid rgba(0, 0, 0, 0.26)',
      width: '250px'
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
    uploadedFileName: {
      fontSize: 14,
      marginTop: '-14px',
      marginBottom: 20
    },
    '@media(max-width:700px)': {
      wrapper: {
        width: '320px'
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
      },
      uploadPhotoMobile: {
        display: 'flex',
        marginBottom: 20,
        fontSize: 15,
        'span': {
          position: 'relative'
        }
      },
      uploadedFileName: {
        marginTop: '-74px',
      },
      dropzone: {
        width: 134,
        height: 40,
        border: 'none',
        outline: 'none',
        position: 'relative',
        top: '-61px',
        '&:hover': {
          border: 'none'
        }
      }
    },
  })



  const styles = useStyles();

  const handleDeleteChip = (chipToDelete: ChipData) => () => {
    setLocation((chips: any) => chips.filter((chip: any) => chip.key !== chipToDelete.key));
  };

  const [alertState, setAlertState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = alertState;

  const handleClickAlert = () => {
    setAlertState({ ...alertState, open: true });
  };

  const handleCloseAlert = () => {
    setAlertState({ ...alertState, open: false });
  };

  const timeString = (time) =>{
    const year = time.getFullYear()
    const month = time.getMonth()
    const date = time.getDate()
    const hours =time.getHours()
    const minutes =time.getMinutes()
    const check = (some) => some < 10 ? "0" + some: some

    return `${year}-${check(month)}-${check(date)}T${check(hours)}:${check(minutes)}+02:00`
  }

  const createDiscount = () =>{
//     interface Idiscount{
//     name: string;
//     vendorId: string;
//     fullDescription: string;
//     isOnline:boolean;
//     imageLink:string;
//     startDate:string;
//     endDate: string;
//     subCategoryIds: string[];
//     locationIds: string[];
//     categoryId: string;
//     percentage: number;
// "2017-07-19T14:25+02:00"
// }
    const newDiscount = {
      name: title,
      fullDescription:description,
      imageLink: fileName,
      categoryId: (category.filter(item=> item.name === choeseCategory).map(item => item.id))[0],
      isOnline: isOnline,
      vendorId: getVendorId(),
      locationIds: vendorLocation.filter(item => item.vendorId === getVendorId()).map(item=>item.id),
      endDate: timeString(time.From),
      startDate: timeString(time.To),
    }
    console.log(newDiscount)
  }
    
  //  `${time?.To.getFullYear()}-${time?.To.getMonth()}-${time?.To.getDate()}T${time?.To.getHours() < 10 ? "0"+time?.To.getHours() : time?.To.getHours()}:${time?.To.getMinutes()< 10 ? "0" +time?.To.getMinutes(): time?.To.getMinutes()}+02:00`

  const list = () => (
    <List className={styles.wrapper}>
      <ListItem>
        <form className={styles.form} >
          <Grid container direction='column'>
            <div className={styles.wrapper__title} onClick={toggleDrawer(false)}>
              <KeyboardBackspaceOutlinedIcon style={{ fontSize: 40, position: 'relative', top: 11 }} />
              {t`Back`}
            </div>
            <span className={styles.modal_label}>{t`Add a promotion`}</span>
           <TextField required
                      className={styles.marginBottom} label={t`Title`}
                      onKeyDown={handleKeyDownForTitle}
                      onChange={(e: any) => {
                      setTitle(e.target.value)
                        }}
           />


            <AdminSelect name={t`Category`} data={categoryState}  multi={false} handleChange={setChoeseCategory} state={choeseCategory}/>
            {categoryInput ?
              <>
                <TextField className={styles.marginBottom} label={t`Add new category`} onKeyDown={handleKeyDownForCategory} onChange={(e: any) => setNewCategory(e.target.value)} />
                <div className={styles.addressButtons}>
                  <Button onClick={submitCategory} className={styles.address_submit}>{t`Submit`}</Button>
                  <Button onClick={cancelCategory} className={styles.address_cancel}>{t`Cancel`}</Button>
                </div>
              </>
              : <span className={styles.address__span} onClick={addCategory}>{t`+ Add new category`}</span>}
            <AdminSelect name={t`Tags`} data={tags} disabled={!choeseCategory} multi={true} handleChange={setChoeseTag}/>
            {tagInput ?
              <>
                <TextField className={styles.marginBottom} disabled={!choeseCategory} label={t`Add new tag`} onKeyDown={handleKeyDownForTag} onChange={(e: any) => setNewTag(e.target.value)} />
                <div className={styles.addressButtons}>
                  <Button onClick={submitTag} className={styles.address_submit}>{t`Submit`}</Button>
                  <Button onClick={cancelTag} className={styles.address_cancel}>{t`Cancel`}</Button>
                </div>
              </>
              : <span className={styles.address__span} onClick={addTag}>{t`+ Add new tag`}</span>}
            <AdminSelect name={t`Vendor Name`} data={vendors} multi={false} handleChange={setChoeseVendor}/>
            {disableInput ? '' : (
              <>
                {location.map((data: any) => {
                  if (data.city && data.country && data.address !== '') {
                    return (
                      <li key={data.key}>
                        <Chip
                          label={data.country + ', ' + data.city + ', ' + data.address}
                          variant='outlined'
                          onDelete={handleDeleteChip(data)}
                        />
                      </li>
                    );
                  }

                })}
                <TextField className={styles.marginBottom}
                  disabled={!choeseVendor}
                  label={t`Country`}
                  value={newLocation.newCountry}
                  onKeyDown={handleKeyDownForCountry}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewLocation({ ...newLocation, newCountry: e.target.value })
                  }}
                />
                <TextField className={styles.marginBottom}
                  disabled={!choeseVendor}
                  label={t`City`}
                  value={newLocation.newCity}
                           onKeyDown={handleKeyDownForCity}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewLocation({ ...newLocation, newCity: e.target.value })
                  }}
                />

                <TextField className={styles.marginBottom}
                  disabled={!choeseVendor}
                  label={t`Address`}
                  value={newLocation.newAddress}
                           onKeyDown={handleKeyDownForAddress}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewLocation({ ...newLocation, newAddress: e.target.value })
                  }}
                />
                <div className={styles.addressButtons}>
                  <Button onClick={submitAddress} className={styles.address_submit}>{t`Submit`}</Button>
                </div>
              </>
            )}
            <div className={styles.checkbox__wrapper}>
              <input type="checkbox" className={styles.checkbox} onClick={changeDisable}/>
              <label className={styles.checkbox__label} >{t`Online`}</label>
            </div>
            <div className={styles.marginBottom}>
              <ContainerDataPiker setTime={setTime} />
            </div>
            <TextField className={styles.marginBottom}
              required
              label={t`Discount %`}
              type='number'
              InputProps={{ inputProps: { min: 0 } }} />
            <TextField className={styles.marginBottom}
              required
              multiline rows={5}
              label={t`Description`}
              onKeyDown={handleKeyDownForDescription}
              onChange={(e: any) => setDescription(e.target.value)}
              variant="outlined"
              inputProps={{
                maxLength: 2000,
                minLength: 50
              }} />
            <div className={styles.uploadPhotoMobile}>
              <button className={styles.uploadFile__btn}>Upload photo</button>
            </div>
            <div className={styles.dropzone}>
              <DropZone uploadPhoto={(image: any) => setImage(image)} />
            </div>
            <span className={styles.uploadedFileName}>{uploadFileName}</span>
            <Button className={styles.submitButton} onClick={addDiscount}>{t`Submit`}</Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleCloseAlert}
              key={vertical + horizontal}
              autoHideDuration={3000}
            >
              <Alert onClose={handleCloseAlert} severity='success'>
                Promotion was successfully created!
              </Alert>
            </Snackbar>
          </Grid>
        </form>
      </ListItem>
    </List>
  )
  return (
    <div>
      <button onClick={toggleDrawer(true)} className={styles.adminModalButton}>{t`Add a promotion`}</button>
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

export default AdminPanelCard;