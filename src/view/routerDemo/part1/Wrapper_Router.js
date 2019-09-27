import React from 'react';
import {Route} from "react-router-dom";

export const RenderRoute = ({ component: Component, path, ...rest }) => {
    return <Route path={path} render={routeProps => {
        return <Component {...routeProps} {...rest}/>
    }}/>
};