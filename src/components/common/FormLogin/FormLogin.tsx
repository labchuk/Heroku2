import React, { useState} from "react";
import "./FormLogin.scss";
import {useAuth0} from '@auth0/auth0-react';
import { login } from "../../../http/userApi";
import axios from "axios";


const FormLogin: React.FC = () => {
    const {loginWithRedirect, logout, isAuthenticated } = useAuth0();
    interface IData {
        email: string,
        password: string
    }
    const [date, setDate] = useState<IData>({email:"", password: ""})
    
    const sigIn = async () =>{
        // const response = axios.get(`https://exadel-discounts-project.herokuapp.com/`)
        // console.log(response)
        const response = await login(date);
        console.log(response)
        localStorage.setItem("token", response.data().token)
  }

        
    
    
    return (
        <div className="FormLogin">
            <input
                type="email"
                placeholder="email"
                className="incorrectInput"
                onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setDate({...date, email: e.target.value})}
            />
            <p>
                The email or password you entered isn’t connected to any
                account. Find your account and log in.
            </p>
            <input
                type="password"
                placeholder="password"
                className="formInputPassword"
                onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setDate({...date, password: e.target.value})}
            />
            <button  onClick={()=> sigIn()}> Log in </button>
            {/* <button  onClick={ ()=> loginWithRedirect() }> Log in </button>
            {isAuthenticated && <button  onClick={()=>logout()}>
                Log out
            </button>   } */}
            
            
        </div>
    );
};

export default FormLogin;