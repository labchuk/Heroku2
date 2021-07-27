import React from "react";
import "./LogoutButton.scss";
import {  useAppDispatch} from "../../../store/Redux-toolkit-hook";
import { resetUserState } from "../../../store/userSlise";
import {resetFilteState} from "../../../store/filtersStore";
import { resetChipState } from "../../../store/chipReducer"
import {resetHistory} from "../../../store/historySearch"
import {t} from "ttag";

const LogoutButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const logout = () =>{
        dispatch(resetUserState());
        dispatch(resetFilteState());
        dispatch(resetChipState());
        dispatch(resetHistory());
        localStorage.removeItem("token")
    };
    return (
        <button className={"logout-btn"} onClick={logout}>{t`Logout`}</button>
    )
};

export default LogoutButton;