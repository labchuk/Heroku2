import React from 'react';
import { t, jt } from 'ttag';
import { saveLocale } from './i18nInit';


const setLocale = (locale: any) => (ev: any) => {
    ev.preventDefault();
    saveLocale(locale);
    window.location.reload();
}

const LangSwitcher: React.FunctionComponent = () => (
    <div className="Lang-switch">
        <h2>{ t`Switch lang`}</h2>
        <a href='/' onClick={setLocale('uk')}>uk</a>
        <a href='/' onClick={setLocale('ru')}>ru</a>
        <a href='/' onClick={setLocale('en')}>en</a>
    </div>
)
