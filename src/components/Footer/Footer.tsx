import React from 'react';
import { Logo } from '../index';
import "./Footer.scss";
import phone from '../../images/icons/phone.svg';
import email from '../../images/icons/email.svg';


const Footer = () => {
    return (
        <footer className="footer">
           <Logo/>
           
           <div className="footerContact">
               <a className="footerWeb" href="www.exadel.com">www.exadel.com</a>
                <div className="footerLink">
                    <img src={phone} alt="icon"/>
                    <a href="tel:+3802222222">+380 2222 222</a>
                </div>
                <div className="footerLink">
                    <img src={email} alt="icon"/>
                    <a href="mailto: info@exadel.com">info@exadel.com</a>
                </div>
           </div>
           
           <div className="footerSocial">
               <a href="https://www.linkedin.com/company/exadel/" target="_blank">
                    <i className="icon-linkedin"></i>
               </a>
               <a href="https://www.facebook.com/exadelinc/" target="_blank">
                    <i className="icon-facebook"></i>
               </a>
               <p>Copyright ©2021 “EXA COUPONS”. All Rights Reserved</p>
           </div>
           
        </footer>
    );
};

export default Footer;