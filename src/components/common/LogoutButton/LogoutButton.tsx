import React from "react";
import "./LogoutButton.scss";
import {  useAppDispatch} from "../../../store/Redux-toolkit-hook";
import { setIsAuth } from "../../../store/userSlise"
import {t} from "ttag";

const LogoutButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const logout = () =>{
        dispatch(setIsAuth(false));
        localStorage.removeItem("token");
    };
    return (
        <button className={"logout-btn"} onClick={logout}>{t`Logout`}</button>
    )
};

export default LogoutButton;