import React from 'react';
import { getUserDetails, check } from "../../../http/userApi";
import {
    AdminPanelCard,
    AdminPanelVendor,
    CardList,
    SearchBar,
    DelateVendorMenu,
    LogoutButton
} from "../../index";
import Layout from "../../common/Layout/Layout";
import { useAuth0 } from '@auth0/auth0-react';
import "./MainPage.scss";
import { useAppSelector} from "../../../store/Redux-toolkit-hook";
import ChipsArray from "../../common/ChipsArray/ChipsArray";

const MainPage = () => {
    const isAdmin = useAppSelector(state => state.user.admine);
    const userId = useAppSelector(state => state.user.userId);
    const userDatails = getUserDetails(userId);
    const a = check();
    console.log(a)
    console.log(userDatails)
    
    return (
        <div className={"homepage"}>


             {/*{isAdmin && (
                <div>
                    <AdminPanelCard />
                    <AdminPanelVendor />
                    <DelateVendorMenu/>
                </div>
            )}*/}

            <Layout />


        </div>
    );
};

export default MainPage;