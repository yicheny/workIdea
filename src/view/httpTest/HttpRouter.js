import React from 'react';
import {Route, Switch} from "react-router-dom";
import HttpHome from "./HttpHome";

function HttpRouter(props) {
    return <div>
        <Switch>
            <Route component={HttpHome}/>
        </Switch>
    </div>
}

export default HttpRouter;