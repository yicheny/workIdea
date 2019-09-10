import React from 'react';
import {Switch,Route} from "react-router-dom";
import CustomHook from "./CustomHook";

function ReactDemoRouter(props) {
    return <Switch>
        <Route path='/react/demo/customHook' component={CustomHook}/>
    </Switch>
}

export default ReactDemoRouter;