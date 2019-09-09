import React from 'react';
import {Switch,Route} from "react-router-dom";
import RouterHome from "./RouterHome";
import RouterPart1 from "./part1/RouterPart1";

function RouterRouter(props) {
    return <Switch>
        <Route path='/router/p1' component={RouterPart1}/>
        <Route component={RouterHome}/>
    </Switch>
}

export default RouterRouter;