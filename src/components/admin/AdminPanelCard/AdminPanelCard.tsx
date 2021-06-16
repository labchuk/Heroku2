import { ListItem } from '@material-ui/core';
import { Drawer, List } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ContainerDataPiker from '../../common/SearchBar/ContainerDatePiker/ContainerDatePiker';
import "./AdminPanelCard.scss";

const AdminPanelCard = () => {
  const [state, setState] = React.useState(false);
  const [tagsValue, setTagsValue] = React.useState('');
  const [countryValue, setCountryValue] = React.useState('');
  const [cityValue, setCityValue] = React.useState('');

  const toggleDrawer = (open: any) => (event: any) => {
    setState(open);
  }

  const handleChangeTags = (event: any) => {
    setTagsValue(event.target.value)
  }

  const handleChangeCountry = (event: any) => {
    setCountryValue(event.target.value)
  }

  const handleChangeCity = (event: any) => {
    setCityValue(event.target.value)
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
      textAlign: 'right'
    },
    checkbox__wrapper: {
      marginBottom: 15,
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
    loadphoto: {
      fontSize: 14,
    },
    // button: {
    //   border: '2px solid #1877F2',
    //   fontSize: 14,
    //   borderRadius: 30,
    //   padding: '10px 30px',
    //   color: '#1877F2',
    //   '&:hover': {
    //     background: 'transparent'
    //   }
    // }

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
          <TextField className={styles.marginBottom} id="outlined-basic" label="title" variant="outlined" />
          <FormControl variant="outlined">
            <InputLabel>tags</InputLabel>
            <Select value={tagsValue}
                    onChange={handleChangeTags}
                    className={styles.marginBottom}>
              <MenuItem value={'sport'}>sport</MenuItem>
              <MenuItem value={'clothes'}> clothes</MenuItem>
              <MenuItem value={'food'}>food</MenuItem>
              <MenuItem value={'activity'}>activity</MenuItem>
              <MenuItem value={'video games'}>video games</MenuItem>
            </Select>
          </FormControl>
          <TextField className={styles.marginBottom} id="outlined-basic" label="vendor name" variant="outlined" />
          <FormControl variant="outlined">
            <InputLabel>country</InputLabel>
            <Select value={countryValue}
                    onChange={handleChangeCountry}
                    className={styles.marginBottom}>
              <MenuItem value={'Ukraine'}>Ukraine</MenuItem>
              <MenuItem value={'Belarus'}>Belarus</MenuItem>
              <MenuItem value={'USA'}>USA</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel>city</InputLabel>
            <Select 
                    value={cityValue}
                    onChange={handleChangeCity}
                    className={styles.marginBottom}>
              <MenuItem value={'Lviv'}>Lviv</MenuItem>
              <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
              <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
            </Select>
          </FormControl>
          <TextField className={styles.marginBottom} id="outlined-basic" label="address" variant="outlined" />
          <div className={styles.checkbox__wrapper}>
            <input type="checkbox"  className={styles.checkbox}/>
            <label className={styles.checkbox__label}>Online</label>
          </div>
          <div className={styles.marginBottom}>
            <ContainerDataPiker/>
          </div>
          <TextField className={styles.marginBottom} id="outlined-basic" label="price" variant="outlined" />
          <TextField className={styles.marginBottom} id="outlined-basic" label="discount %" variant="outlined" />
          <TextField className={styles.marginBottom} id="outlined-basic" type="number" InputProps={{ inputProps: { min: 0 } }} label="number of discounts" variant="outlined" />
          <TextField className={styles.marginBottom} multiline  rows={5} id="outlined-basic" label="description" variant="outlined" />
          <input className={styles.loadphoto} type="file" accept=".jpg, .jpeg, .png"/> 
        </Grid>
      </ListItem>
    </List>
  )
    return (
        <div>
          <Button onClick={toggleDrawer(true)}>Add a promotion</Button>
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