import React,{useState} from 'react';
import { Drawer, } from '@material-ui/core';
import { SearchBar } from '..';
import { t } from 'ttag';
import "./ModalSearchBar.scss"


const ModalSearchBar = () => {
    const [state, setState] = useState(false);
    const toggleDrawer = (open: any) => (event: any) => {
    setState(open);
  }

    return (
        <div>
          <button className="btn_open" onClick={toggleDrawer(true)}>  {t`Open filter`} </button>
          <Drawer anchor={'left'}
                  open={state}
                  onClose={toggleDrawer(false)}>
            <div>
            <SearchBar />
            </div>
          </Drawer>
        </div>
    );
};

export default ModalSearchBar;