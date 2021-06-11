import React from 'react';
import "./FormLogin.scss";

const FormLogin = () => {
    return (
        <form className={"FormLogin"}>
            <input
                type="email"
                placeholder="email"
                className={"incorrectInput"}
            />
            <p>
                The email or password you entered isn’t connected to any
                account. Find your account and log in.
            </p>
            <input
                type="text"
                placeholder="password"
                className={"formInputPassword"}
            />
            <button type="submit"> Log in </button>
        </form>
    );
};

export default FormLogin;