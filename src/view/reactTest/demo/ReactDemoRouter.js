import React from 'react';
import {Switch,Route} from "react-router-dom";
import CustomHook from "./CustomHook";
import CustomHook2 from "./CustomHook2";

function ReactDemoRouter(props) {
    return <Switch>
        <Route path='/react/demo/customHook' component={CustomHook}/>
        <Route path='/react/demo/customHook2' component={CustomHook2}/>
    </Switch>
}

export default ReactDemoRouter;