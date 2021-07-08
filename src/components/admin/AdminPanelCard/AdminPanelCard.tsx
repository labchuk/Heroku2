import { ListItem } from '@material-ui/core';
import { Drawer, List } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef } from 'react';
import DropZone from '../../common/DropZone/DropZone';
import ContainerDataPiker from '../../common/SearchBar/ContainerDatePiker/ContainerDatePiker';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "./AdminPanelCard.scss";
import { AutocompleteRenderOptionState } from '@material-ui/lab';
import AutocompleteMultipleChoise from '../../common/AutocompleteMultipleChoise/AutocompleteMultipleChoise';
import { t } from 'ttag';

const AdminPanelCard = () => {
  const [state, setState] = React.useState(false);
  const [disableInput, setDisableInput] = React.useState(false);
  const [addressInput, setAddressInput] = React.useState(false);
  const [categoryInput, setCategoryInput] = React.useState(false);
  const [tagInput, setTagInput] = React.useState(false);
  const [uploadFileName, setUploadFileName] = React.useState('');
  const [newAddress, setNewAddress] = React.useState('');
  const [newCategory, setNewCategory] = React.useState('');
  const [newTag, setNewTag] = React.useState('');
  const parentRef = useRef<any>();


  const [address, setAddress] = React.useState([
    { title: 'Chornovola Str, 27' },
    { title: 'Yakuba Kolasa Str, 37' },
    { title: 'Horodotska Str, 7a' },
    { title: 'Rynok Sqr, 1' },
    { title: 'Mazepy Str, 1a' },
    { title: 'Warshavska Str, 127' },
  ]);

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

  const vendors = [
    { title: 'Nike' },
    { title: 'Puma' },
    { title: `Domino's` },
    { title: 'Zara' },
    { title: 'Steam' },
  ];

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

  const toggleDrawer = (open: any) => (event: any) => {
    setState(open);
  }

  let changeDisable = () => {
    setDisableInput(!disableInput)
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

  const addCategory = () => {
    setCategoryInput(true)
  }
  const submitCategory = () => {
    setCategoryInput(false);
    let addNewCategory = category.concat({ title: newCategory });
    setCategory(addNewCategory)
  }

  const cancelCategory = () => {
    setCategoryInput(false);
  }

  const addTag = () => {
    setTagInput(true)
  }
  const submitTag = () => {
    setTagInput(false);
    let addNewTag = tags.concat({ title: newTag });
    setTag(addNewTag)
  }

  const cancelTag = () => {
    setTagInput(false);
  }

  const useStyles = makeStyles({
    root: {
      "& .MuiButton:hover": {
        backgroundColor: 'red'
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
      marginBottom: 20
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
    },
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
          <span className={styles.modal_label}>{t`Add a promotion`}</span>
          <TextField className={styles.marginBottom} label={t`Title`} />
          <AutocompleteMultipleChoise data={category} lab={t`Category`} />
          {categoryInput ?
            <>
              <TextField className={styles.marginBottom} label={t`Add new category`} onChange={(e: any) => setNewCategory(e.target.value)} />
              <div className={styles.addressButtons}>
                <Button onClick={submitCategory} className={styles.address_submit}>{t`Submit`}</Button>
                <Button onClick={cancelCategory} className={styles.address_cancel}>{t`Cancel`}</Button>
              </div>
            </>
            : <span className={styles.address__span} onClick={addCategory}>{t`+ Add new category`}</span>}
          <AutocompleteMultipleChoise data={tags} lab={t`Tags`}/>
          {tagInput ?
            <>
              <TextField className={styles.marginBottom} label={t`Add new tag`} onChange={(e: any) => setNewTag(e.target.value)} />
              <div className={styles.addressButtons}>
                <Button onClick={submitTag} className={styles.address_submit}>{t`Submit`}</Button>
                <Button onClick={cancelTag} className={styles.address_cancel}>{t`Cancel`}</Button>
              </div>
            </>
            : <span className={styles.address__span} onClick={addTag}>{t`+ Add new tag`}</span>}
          <Autocomplete
            options={vendors}
            getOptionLabel={(option) => option.title}
            renderOption={(option: { title: string }, state: AutocompleteRenderOptionState) => (
              <li {...state}>
                {option.title}
              </li>
            )}
            style={{ width: '100%', marginBottom: 15 }}
            renderInput={(params) => (
              <TextField {...params} label={t`Vendor name`} />
            )}
          />
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
          <div className={styles.checkbox__wrapper}>
            <input type="checkbox" className={styles.checkbox} onClick={changeDisable} />
            <label className={styles.checkbox__label} >{t`Online`}</label>
          </div>
          <div className={styles.marginBottom}>
            <ContainerDataPiker />
          </div>
          <TextField className={styles.marginBottom} label={t`Discount %`} />
          <TextField className={styles.marginBottom} multiline rows={5} label={t`Description`} variant="outlined" />
          <div className={styles.dropzone}>
            <DropZone wrapperHeight={100}
                      uploadPhoto={(image: any) => setUploadFileName(image)}
            />
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