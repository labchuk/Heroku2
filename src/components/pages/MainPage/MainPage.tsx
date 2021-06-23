import React from 'react';
import {
    AdminPanelCard,
    AdminPanelVendor,
    CardList,
    SearchBar,
    DelateVendorMenu,
    LogoutButton
} from "../../index";
import "./MainPage.scss";
import { useAppSelector} from "../../../store/Redux-toolkit-hook";

const MainPage = () => {
    const isAdmin = useAppSelector(state => state.user.admine);
    
    
    return (
        <div className={"homepage"}>
            <LogoutButton/>
            <SearchBar/>
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