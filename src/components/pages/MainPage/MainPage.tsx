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
import AdminBtn from "../../admin/AdminBtn/AdminBtn";

const MainPage = () => {
    const admin = false;
    return (
        <div className={"homepage"}>
            <Header />
            <AdminBtn />
            <SearchBar />
            {admin && (
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