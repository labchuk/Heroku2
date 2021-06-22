import React,{useEffect,useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppRouter, Footer, Header, Spinner} from './components';
import "./style/main.css";
import { useAppSelector, useAppDispatch} from "./store/Redux-toolkit-hook"; 
import {check} from './http/userApi';
import { setIsAuth,} from "./store/userSlise";


const  App = () => {
  // const dispatch = useAppDispatch();
  // const [loading, setLoading] =useState<boolean>(true)
  // useEffect(() => {
  //   check().then((data) =>{
  //     dispatch(setIsAuth(true))
  //   }).finally(() => setLoading(false))  
  // }, []);

  const isAuth: boolean = useAppSelector(state => state.user.isAuth);
  

  // if(loading){
  //   return <Spinner/> 
  // }
  
  return (
      <BrowserRouter>
          {isAuth && <Header/>}
          <AppRouter/>
          {isAuth && <Footer/>}
      </BrowserRouter>
  );
}

export default App;
