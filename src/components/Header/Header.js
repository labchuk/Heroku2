import React from 'react';
import { Logo } from '../index';
import "./Header.scss";

const Header = () => {
    return (
        <div className={"header"}>
          <Logo/>
        </div>
    );
};

export default Header;