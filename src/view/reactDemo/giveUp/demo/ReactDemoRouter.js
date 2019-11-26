import React from 'react';
import {Switch,Route} from "react-router-dom";
import CustomHook from "./CustomHook";
import CustomHook2 from "./CustomHook2";
import HookRule from "./HookRule";

function ReactDemoRouter(props) {
    return <Switch>
        <Route path='/react/demo/customHook' component={CustomHook}/>
        <Route path='/react/demo/customHook2' component={CustomHook2}/>
        <Route path='/react/demo/hookRule' component={HookRule}/>
    </Switch>
}

export default ReactDemoRouter;