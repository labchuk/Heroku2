import React from 'react';
import { getUserDetails, check } from "../../../http/userApi";
import {
    AdminPanelCard,
    AdminPanelVendor,
    CardList,
    SearchBar,
    DelateVendorMenu,
} from "../../index";
import "./MainPage.scss";
import { useAppSelector} from "../../../store/Redux-toolkit-hook";

const MainPage = () => {
    const isAdmin = useAppSelector(state => state.user.admine);
    const userId = useAppSelector(state => state.user.userId);
    const userDatails = getUserDetails(userId);
    const a = check();
    console.log(a)
    console.log(userDatails)
    
    return (
        <div className={"homepage"}>
            
            <SearchBar />
             {isAdmin && (
                <div>
                    <AdminPanelCard />
                    <AdminPanelVendor />
                    <DelateVendorMenu/>
                </div>
            )}

            <CardList />
             
        </div>
    );
};

export default MainPage;