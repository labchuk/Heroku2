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


const MainPage = () => {
    const {user, isAuthenticated } = useAuth0();
    console.log(user)
    const admin = true;
    return (
        <div className={"homepage"}>
            <Header />
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