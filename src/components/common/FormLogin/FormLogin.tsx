import React, { useState, useRef} from "react";
import "./FormLogin.scss";
import { login, getUserDetails,} from "../../../http/userApi";
import { useHistory } from "react-router-dom";
import { MAIN_ROUTE, LOGIN_ROUTE, FIRST_ROUTE } from "../../../utils/consts";
import {VisibilityOutlined, VisibilityOffOutlined} from "@material-ui/icons"
import { makeStyles } from "@material-ui/styles";
import {useAppDispatch,} from "../../../store/Redux-toolkit-hook"
import {setEmail, setIsAuth, setUserId, setAdmine, setUserName, setLocation} from "../../../store/userSlise"

const useStyles = makeStyles({
    root: {
        color: "rgb(112, 107, 107)",
        cursor: "pointer"
    },
});


const FormLogin: React.FC = () => {
    const classes = useStyles();
    const history: any = useHistory();
    const emailErrorTextRef: any = useRef();
    const inputPasswordRef: any = useRef();
    const dispatch = useAppDispatch();
   

    const  regularEmail: any = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 
    const regularPassword: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i;
    interface IData {
        email: string,
        password: string
    }
    const [data, setData] = useState<IData>({email:"", password: ""})
    const [visible,setVisible] = useState<boolean>(false)
 
    const checkForm = (e:any) => {
        e.preventDefault()
        if(regularEmail.test(data.email) && regularPassword.test(data.password)){
            signIn() 
        } else showError()
    }

    const signIn = async () =>{
        try{
            const user: any = await login(data);
            dispatch(setEmail(user.sub));
            dispatch(setIsAuth(true));
            dispatch(setAdmine(user.admin));
            dispatch(setUserId(user.userId));

            getUserDetails(user.userId).then(data => {
            dispatch(setUserName(data.name));
            data.locationId && dispatch(setLocation(data.location));
            });
            redirect();
        }catch(e){
            showError()
        }
    }

    const redirect = () =>{
        FIRST_ROUTE ===  LOGIN_ROUTE ?  history.push(MAIN_ROUTE): history.push(FIRST_ROUTE)
    }

    const showError = () => {
        emailErrorTextRef.current.style.visibility="visible";
    }

    const hideError =() => {
        emailErrorTextRef.current.style.visibility="hidden"
    }

    const visiblePassword = (bool: boolean,type: string) => {
        setVisible(bool);
        inputPasswordRef.current.type = type;
    } 
    
    
    
    return (
        <form className="FormLogin">
            <input 
                type="email"
                placeholder="email"
                onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setData({...data, email: e.target.value})}
                onFocus = {hideError}
            />
            
            <p ref = {emailErrorTextRef} >
                The email or password you entered isn’t connected to any
                account. Find your account and log in.
            </p>
            
            <input ref={inputPasswordRef}
                onFocus = {hideError}
                type="password"
                placeholder="password"
                className="formInputPassword"
                onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setData({...data, password: e.target.value})}
            />
            
                {!visible?<VisibilityOffOutlined  className={classes.root} onClick={()=> visiblePassword(true,"text")}/>:
                < VisibilityOutlined className={classes.root} onClick={()=> visiblePassword(false,"password")}/>}
                
            <input type="submit" onClick={(e)=> checkForm(e)}  hidden/>  
            <button type="submit" onClick={(e)=> checkForm(e)}> Log in </button>
            
        </form>
    );
};

export default FormLogin;