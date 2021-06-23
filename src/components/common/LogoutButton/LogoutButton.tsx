import React from "react";
import "./LogoutButton.scss";
import {  useAppDispatch} from "../../../store/Redux-toolkit-hook";
import { setIsAuth } from "../../../store/userSlise"


const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const logout = () =>{
        dispatch(setIsAuth(false));
        localStorage.removeItem("token");
    };
    return <button onClick={logout}/> 
};

export default LogoutButton;