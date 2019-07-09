import React from 'react';
import {Route, Switch} from "react-router-dom";
import DesignPatternHome from "./DesignPatternHome";
import Document01 from "./control/document01";

function DesignPatternRouter(props) {
    return <Switch>
        <Route path='/design/doc1' component={Document01}/>

        <Route component={DesignPatternHome}/>
    </Switch>
}

export default DesignPatternRouter;