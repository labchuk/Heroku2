import React from 'react';
import { Logo } from '../index';
import "./Header.scss";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


  export default function Header () {
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };



    return (
        <div className={"header"}>
          <Logo/>
          <div className={"gravatar"}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                  <div className={"username"}>username</div>
                  <img src="https://zbyhoo.files.wordpress.com/2011/07/me_pixel_bright_bg.png?w=584" alt=""/>
              </Button>
              <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                  <MenuItem onClick={handleClose}>Username</MenuItem>
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                  <MenuItem onClick={handleClose}>History</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>

              {/*<div className={"username"}>username</div>
              <img src="https://zbyhoo.files.wordpress.com/2011/07/me_pixel_bright_bg.png?w=584" alt=""/>*/}
          </div>
        </div>
    );
};


