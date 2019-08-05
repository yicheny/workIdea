import React from 'react';
import {Route, Switch} from "react-router-dom";
import DesignPatternHome from "./DesignPatternHome";
import Base1 from "./control/Base1";
import PrototypePattern from "./control/PrototypePattern";

function DesignPatternRouter(props) {
    return <Switch>
        <Route path='/design/base1' component={Base1}/>
        <Route path='/design/prototype' component={PrototypePattern}/>
        <Route component={DesignPatternHome}/>
    </Switch>
}

export default DesignPatternRouter;