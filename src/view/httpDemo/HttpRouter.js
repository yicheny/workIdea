import React from 'react';
import {Route, Switch} from "react-router-dom";
import Demo1 from "./practice/Demo1";
import HttpHome from "./HttpHome";

function HttpRouter(props) {
    return <Switch>
        <Route path='/http/p1'  component={Demo1}/>
        <Route  component={HttpHome}/>
    </Switch>
}

export default HttpRouter;