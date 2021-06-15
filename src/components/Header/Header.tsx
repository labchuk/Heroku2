import React from 'react';
import { Logo } from '../index';
import "./Header.scss";
import Button from '@material-ui/core/Button';
import Menu, {MenuProps} from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from "react-router-dom";
import {Hidden, makeStyles} from "@material-ui/core";
import {styled} from "@material-ui/core";


const useStyles = makeStyles({
    link: {
        backgroundColor: "#F7F9FB",
        color: "#1877F2",
    },
    menu: {
        maxWidth: 1000,
        marginTop: "50px",
        padding: 0,
    }
});



  export default function Header () {
      const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };
            let admin = true;


    return (
        <div className={"header"}>
          <Logo/>
          <div className={"desktop-nav"}>
            <NavLink to={"/main-page"} activeClassName={"activelink"} >Home</NavLink>
            <NavLink to={"/history"} activeClassName={"activelink"} >History</NavLink>
            <NavLink to={"/statistic"} activeClassName={"activelink"} >Statistics</NavLink>
          </div>

          <div className={"gravatar"}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                  <div className={"username"}>username</div>

              </Button>

              <Menu
                  className={classes.menu}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{
                      disablePadding: true
                  }}

              >
                  <MenuItem onClick={handleClose} className={classes.link}>Username</MenuItem>
                  <Hidden mdUp >
                  <MenuItem onClick={handleClose} className={classes.link}><NavLink to={"/main-page"} className={"link"}>Home</NavLink></MenuItem>
                  <MenuItem onClick={handleClose} className={classes.link}><NavLink to={"/history"} className={"link"} >History</NavLink></MenuItem>
                  </Hidden>
                  <MenuItem onClick={handleClose} className={classes.link}><NavLink to={"/login"} style={{color: "#E44949"}} className={"link"} >Logout</NavLink></MenuItem>


              {admin && <> </>
              }
              </Menu>
          </div>
        </div>
    );
};


