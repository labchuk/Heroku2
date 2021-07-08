import React from 'react';
import {Logo} from '../index';
import "./Header.scss";
import NavBar from "./NavBar/NavBar";
import AdminBtn from "../admin/AdminBtn/AdminBtn";
import LangSwitcher from "../common/LangSwitcher/LangSwitcher";
import {createStyles, makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main
    }
}))

export default function Header() {
    const classes = useStyles()
    return (
            <div className={`header ${classes.root}`}>
                <div className={"header__container"}>
                    <Logo/>
                    <LangSwitcher />
                    <NavBar />
                </div>
            </div>
    );
}


