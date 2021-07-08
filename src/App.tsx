import React,{useEffect,useState} from 'react';
import { BrowserRouter} from "react-router-dom";
import { AppRouter, Footer, Header, Spinner} from './components';
import "./style/main.css";
import { useAppSelector, useAppDispatch} from "./store/Redux-toolkit-hook"; 
import {getUserDetails} from './http/userApi';
import { setIsAuth,} from "./store/userSlise";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Switch } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

declare module "@material-ui/core/styles/createPalette" {
}

const  App = () => {
    const [darkMode, setDarkMode] = useState(false)

    const theme = createMuiTheme({
        palette: {
            type: darkMode? "dark": "light",
            primary: {
                main: darkMode? '#303030': '#f1f5f8',
                contrastText: darkMode? '#ffffff': '#1877f2'
            },
            secondary: {
                main: darkMode? '#464646': '#ffffff',
                light: darkMode? '#ffffff': '#464646'
            },
        }
    })

  const dispatch = useAppDispatch();
  const {isAuth,userId} = useAppSelector(state => state.user);
  const [loading, setLoading] =useState<boolean>(true);

  useEffect(() => {
    getUserDetails(userId).then((resolv) =>{
      dispatch(setIsAuth(true));
    }).catch((f)=>dispatch(setIsAuth(false))).finally(() => setLoading(false));
  },[]);


  

  if(loading){
    return <Spinner open={true} handleClose={null}/>
  }

    return (
        <div className={"app-wrapper"} style={{backgroundColor: theme.palette.primary.main }}>
            <BrowserRouter>
                {isAuth && <ThemeProvider theme={theme}><Header/></ThemeProvider>}
                <div className={"app-wrapper-container"} style={{minHeight: 'calc(100vh - 100px)'}}>
                    <ThemeProvider theme={theme}>
                            <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} color={"secondary"}/>
                            <AppRouter/>
                            <CssBaseline/>
                    </ThemeProvider>
                </div>
                {isAuth && <ThemeProvider theme={theme}><Footer/></ThemeProvider>}
            </BrowserRouter>
        </div>
    );
}

export default App;
