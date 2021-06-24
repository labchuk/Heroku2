import React from "react";
import "./LogoutButton.scss";
import {  useAppDispatch} from "../../../store/Redux-toolkit-hook";
import { setIsAuth } from "../../../store/userSlise"


const LogoutButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const logout = () =>{
        dispatch(setIsAuth(false));
        localStorage.removeItem("token");
    };
    return (
        <button onClick={logout}>Logout </button>
    )
};

export default LogoutButton;