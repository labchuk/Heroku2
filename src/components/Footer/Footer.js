import React from 'react';
import { Logo } from '../index';
import style from "./Footer.module.scss";
import phone from '../../images/icons/phone.svg';
import email from '../../images/icons/email.svg';

const Footer = () => {
    return (
        <footer className={style.footer}>
           <Logo/>
           
           <div className={style.footerContact}>
               <a className={style.footerWeb} href="www.exadel.com">www.exadel.com</a>
                <div className={style.footerLink}>
                    <img src={phone} alt="icon"/>
                    <a href="tel:+3802222222">+380 2222 222</a>
                </div>
                <div className={style.footerLink}>
                    <img src={email} alt="icon"/>
                    <a href="mailto: info@exadel.com">info@exadel.com</a>
                </div>
           </div>
           
           <div className={style.footerSocial}>
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