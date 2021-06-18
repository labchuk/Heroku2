import React from 'react';
import {
    AdminPanelCard,
    AdminPanelVendor,
    CardList,
    DelateVendorMenu,
    Footer,
    Header,
    SearchBar,
} from "../../index";
import "./MainPage.scss";
import { useAppSelector} from "../../../store/Redux-toolkit-hook"

const MainPage = () => {
    const isAdmin = useAppSelector(state => state.user.admine);
    return (
        <div className={"homepage"}>
            <Header />
            <SearchBar />
             {isAdmin && (
                <div>
                    <AdminPanelCard />
                    <AdminPanelVendor />
                    <DelateVendorMenu/>
                </div>
            )}

            <CardList />
            <Footer /> 
        </div>
    );
};

export default MainPage;