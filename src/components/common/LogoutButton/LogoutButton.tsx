import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
    const {logout} = useAuth0()
    return (
        <div onClick={()=>logout()}>
            Log out
        </div>
    );
};

export default LogoutButton;