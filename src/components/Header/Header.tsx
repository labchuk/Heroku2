import React from 'react';
import { Logo } from '../index';
import "./Header.scss";
import Button from '@material-ui/core/Button';
import Menu, {MenuProps} from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        style={{maxWidth: "600px"}}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));


const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


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
              <StyledMenu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                  <MenuItem onClick={handleClose}>Username</MenuItem>
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                  <MenuItem onClick={handleClose}>History</MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to={"/login"} style={{color: "red"}}>Logout</NavLink></MenuItem>

              </StyledMenu>

              {/*<div className={"username"}>username</div>
              <img src="https://zbyhoo.files.wordpress.com/2011/07/me_pixel_bright_bg.png?w=584" alt=""/>*/}
          </div>
        </div>
    );
};


