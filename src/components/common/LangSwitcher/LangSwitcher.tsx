import React from 'react';
import { saveLocale } from './i18nInit';



const LangSwitcher: React.FunctionComponent = () => {
    const setLocale = (locale: any) => (ev: any) => {
        ev.preventDefault();
        saveLocale(locale);
        window.location.reload();
    };
    return (
        <div className="Lang-switch">
            <a href='/' onClick={setLocale('uk')}>uk</a>
            <a href='/' onClick={setLocale('be')}>be</a>
            <a href='/' onClick={setLocale('en')}>en</a>
        </div>
    )

};

export default LangSwitcher