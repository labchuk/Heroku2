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
import { useForm } from 'react-hook-form';
import { SelectMultiple } from '../..';
import MySelect from '../../common/SearchBar/Select/MySelect';

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
    'Chornovola Str, 27',
    'Yakuba Kolasa Str, 37',
    'Horodotska Str, 7a',
    'Rynok Sqr, 1',
    'Mazepy Str, 1a',
    'Warshavska Str, 127',
  ]);

  // const [category, setCategory] = React.useState([
  //   {'Category 1': ['Tag 1.1', 'Tag 1.2', 'Tag 1.3', 'Tag 1.4']},
  //   {'Category 2': ['Tag 2.1', 'Tag 2.2', 'Tag 2.3', 'Tag 2.4']},
  //   {'Category 3': ['Tag 3.1', 'Tag 3.2', 'Tag 3.3', 'Tag 3.4']},
  //   {'Category 4': ['Tag 4.1', 'Tag 4.2', 'Tag 4.3', 'Tag 4.4']},
  //   {'Category 5': ['Tag 5.1', 'Tag 5.2', 'Tag 5.3', 'Tag 5.4']},

  // ]);

  const [category, setCategory] = React.useState([
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ]);

  const [tags, setTag] = React.useState([
    'Tag 1',
    'Tag 2',
    'Tag 3',
    'Tag 4',
    'Tag 5',
  ]);

  const vendors = [
    'Nike',
    'Puma',
    `Domino's`,
    'Zara',
    'Steam',
  ];

  const country = [
    'Ukraine',
    'USA',
    'Belarus',
  ];

  const city = [
    'Lviv',
    'Minsk',
    'Kyiv',
    'Herson',
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
    let addNewAddress = address.concat(newAddress);
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
    let addNewCategory = category.concat(newCategory);
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
    let addNewTag = tags.concat(newTag);
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


  const [validation, setVal] = React.useState<string>();
  const [errors, setErrors] = React.useState<{ validation: string }>();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setErrors({ validation: '' })
    setVal(value);
    let reg = /^[a-zA-Z]+$/.test(value);
    if (!reg) {
      setErrors({ validation: 'Error' })
    }
  }

  const [validationDiscount, setValDiscount] = React.useState<string>();
  const [errorsDiscount, setErrorsDiscount] = React.useState<{ discount: string }>();

  const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setErrorsDiscount({ discount: '' })
    setValDiscount(value);
    let reg = /^[a-zA-Z]+$/.test(value);
    if (!reg) {
      setErrorsDiscount({ discount: 'Error' })
    }
  }

  const [validationDescription, setValDescription] = React.useState<string>();
  const [errorsDescription, setErrorsDescription] = React.useState<{ description: string }>();

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setErrorsDescription({ description: '' })
    setValDescription(value);
    let reg = /^[a-zA-Z]+$/.test(value);
    if (!reg) {
      setErrorsDescription({ description: 'Error' })
    }
  }

  const [valiData, setValiData] = React.useState<any>();
  const [valiDataVendor, setValiDataVendor] = React.useState<any>();
  const list = () => (
    <List className={styles.wrapper}>
      <ListItem>
        <Grid container direction='column'>
          <div className={styles.wrapper__title} onClick={toggleDrawer(false)}>
            <KeyboardBackspaceOutlinedIcon style={{ fontSize: 40, position: 'relative', top: 11 }} />
            Back
          </div>
          <span className={styles.modal_label}>Add a promotion</span>

          {/* ===Title======================================================== */}
          <TextField className={styles.marginBottom} label="Title"
            value={validation}
            onChange={handleChangeTitle}
            error={Boolean(errors?.validation)}
            required
          />

          {/* ===Category======================================================== */}
          <SelectMultiple clName={styles.marginBottom10} data={category} name='Category' changeData={(valiData: any) => setValiData(valiData)} />
          {categoryInput ?
            <>
              <TextField className={styles.marginBottom} label="Add new category" onChange={(e: any) => setNewCategory(e.target.value)} />
              <div className={styles.addressButtons}>
                <Button onClick={submitCategory} className={styles.address_submit}>Submit</Button>
                <Button onClick={cancelCategory} className={styles.address_cancel}>Cancel</Button>
              </div>
            </>
            : <span className={styles.address__span} onClick={addCategory}>+ Add new category</span>}

          {/* ===Tags======================================================== */}
          <SelectMultiple clName={styles.marginBottom10} data={tags} name='Tags *' changeData={(valiData: any) => setValiData(valiData)} />
          {tagInput ?
            <>
              <TextField className={styles.marginBottom} label="Add new tag" onChange={(e: any) => setNewTag(e.target.value)} />
              <div className={styles.addressButtons}>
                <Button onClick={submitTag} className={styles.address_submit}>Submit</Button>
                <Button onClick={cancelTag} className={styles.address_cancel}>Cancel</Button>
              </div>
            </>
            : <span className={styles.address__span} onClick={addTag}>+ Add new tag</span>}

          {/* ===Vendor======================================================== */}
          <MySelect clName={styles.marginBottom10} data={vendors} name='Vendor Name' changeDataV={(valiDataVendor: any) => { setValiDataVendor(valiDataVendor); console.log(valiDataVendor) }} />
          {disableInput ? '' : (
            <>
              {/* ===Address======================================================== */}
              <SelectMultiple clName={styles.marginBottom10} data={country} name='Country *' changeData={(valiData: any) => setValiData(valiData)} />
              <SelectMultiple clName={styles.marginBottom10} data={city} name='City *' changeData={(valiData: any) => setValiData(valiData)} />
              <SelectMultiple clName={styles.marginBottom10} data={address} name='Address *' changeData={(valiData: any) => setValiData(valiData)} />
              {addressInput ?
                <>
                  <TextField className={styles.marginBottom} label="Add an address" onChange={(e: any) => setNewAddress(e.target.value)} />
                  <div className={styles.addressButtons}>
                    <Button onClick={submitAddress} className={styles.address_submit}>Submit</Button>
                    <Button onClick={cancelAddress} className={styles.address_cancel}>Cancel</Button>
                  </div>
                </>
                : <span className={styles.address__span} onClick={addAddress}>+ Add new address</span>}
            </>
          )}
          <div className={styles.checkbox__wrapper}>
            <input type="checkbox" className={styles.checkbox} onClick={changeDisable} />
            <label className={styles.checkbox__label} >Online</label>
          </div>
          <div className={styles.marginBottom}>
            <ContainerDataPiker />
          </div>

          {/* ===Discount======================================================== */}
          <TextField className={styles.marginBottom} label="Discount %"
            value={validationDiscount}
            onChange={handleChangeDiscount}
            error={Boolean(errorsDiscount?.discount)}
            required />

          {/* ===Description======================================================== */}
          <TextField className={styles.marginBottom}
            multiline rows={5}
            label="Description"
            variant="outlined"
            value={validationDescription}
            onChange={handleChangeDescription}
            error={Boolean(errorsDescription?.description)}
            required />

          {/* ===Drop Zone======================================================== */}
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
            <button className={styles.uploadFile__btn}>Upload photo</button>
          </div>
          <span className={styles.uploadedFileName}>{uploadFileName}</span>

          {/* ===Buttons======================================================== */}
          {validation?.length! > 0 &&
            validationDiscount?.length! > 0 &&
            validationDescription?.length! > 0 &&
            valiData > 0 &&
            valiDataVendor > 0 ?
            <Button onClick={toggleDrawer(false)}
              className={styles.submitButton}>Submit</Button> :
            <Button onClick={toggleDrawer(false)}
              disabled
              className={styles.submitButton__disabled}>Submit</Button>
          }

        </Grid>
      </ListItem>
    </List>
  )
  return (
    <div>
      <button onClick={toggleDrawer(true)} className={styles.adminModalButton}>Add a promotion</button>
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