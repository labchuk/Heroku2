import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { authRoutes, publikRoute } from '../routes';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { useAppSelector} from "../store/Redux-toolkit-hook"; 
const AppRouter = () => {
    const isAuth = useAppSelector(state => state.user.isAuth);
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {!isAuth && publikRoute.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
                {!isAuth ? <Redirect to={LOGIN_ROUTE} /> : <Redirect to={MAIN_ROUTE} />} 

        </Switch>
    );
};


export default AppRouter;