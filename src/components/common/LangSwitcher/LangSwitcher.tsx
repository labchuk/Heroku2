import React from 'react';
import { saveLocale, locale } from './i18nInit';
import './LangSwitcher.scss'



const LangSwitcher: React.FunctionComponent = () => {
    const setLocale = (locale: any) => (ev: any) => {
        ev.preventDefault();
        saveLocale(locale);
        window.location.reload();

              };




    return (
        <div className="lang-switch">
            {(locale === 'uk') ? (<a className="active" href='/' onClick={setLocale('uk')}>uk</a>)
             : (<a className="" href='/' onClick={setLocale('uk')}>uk</a>)}
            {(locale === 'be') ? (<a className="active" href='/' onClick={setLocale('be')}>be</a>)
                : (<a className="" href='/' onClick={setLocale('be')}>be</a>)}
            {(locale === 'en') ? (<a className="active" href='/' onClick={setLocale('en')}>en</a>)
                : (<a className="" href='/' onClick={setLocale('en')}>en</a>)}

        </div>
    )

};

export default LangSwitcher