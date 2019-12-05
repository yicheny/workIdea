import React from 'react';
import {Route, Switch} from "react-router-dom";
import Part1 from "./base/HttpPart1";
import HttpHome from "./HttpHome";

function HttpRouter(props) {
    return <div>
        <Switch>
            <Route path='/http/p1'  component={Part1}/>
            <Route  component={HttpHome}/>
        </Switch>
    </div>
}

export default HttpRouter;