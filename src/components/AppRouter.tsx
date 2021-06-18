import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { authRoutes, publikRoute } from '../routes';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { useAppSelector} from "../store/Redux-toolkit-hook"; 

const AppRouter = () => {
    const userState = useAppSelector(state => state.user);
    console.log(userState);
    console.log(useAppSelector(state => state.user.isAuth));
    return (
        <Switch>
            {useAppSelector(state => state.user.isAuth) && authRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} component={ Component} />
            )}
            {publikRoute.map(({ path, Component }) => 
                <Route key={path} path={path} component={ Component} />
            )}
            {
               useAppSelector(state => state.user.isAuth) ?  <Redirect to ={MAIN_ROUTE}/> : <Redirect to={LOGIN_ROUTE}/>
            }    
        </Switch>
    );
};


export default AppRouter;