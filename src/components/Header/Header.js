import React from 'react';
import { Logo } from '../index';
import "./Header.scss";

const Header = () => {
    return (
        <div className={"header"}>
          <Logo/>
          <div className={"gravatar"}>
              <div className={"username"}>username</div>
              <img src="https://zbyhoo.files.wordpress.com/2011/07/me_pixel_bright_bg.png?w=584" alt=""/>
          </div>
        </div>
    );
};

export default Header;