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
import { useAuth0 } from '@auth0/auth0-react';
import "./MainPage.scss";
import AdminBtn from '../../admin/AdminBtn/AdminBtn';
import Sort from "../../common/Sort/Sort";


const MainPage = () => {
    const {user, isAuthenticated } = useAuth0();
    console.log(user)
    const admin = true;
    return (
        <div className={"homepage"}>
            <Header />
            <Sort />
            {isAuthenticated && (
            <div>
                <img src={user?.picture} alt={user?.name} />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>
        )}
            <SearchBar />
             {admin && (
                <div>

                    <AdminPanelVendor />
                    <DelateVendorMenu/>
                </div>

            )}
            <AdminBtn />

            <CardList />
            <Footer /> 
        </div>
    );
};

export default MainPage;