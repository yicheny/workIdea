import React from 'react';
import './DesignPatternRouter.less';
import {Route, Switch} from "react-router-dom";
import DesignPatternHome from "./DesignPatternHome";
import Base1 from "./control/Base1";
import PrototypePattern from "./control/PrototypePattern";
import SingleTon from "./control/SingleTon";
import Strategy from "./control/Strategy";

function DesignPatternRouter(props) {
    return <Switch>
        <Route path='/design/base1' component={Base1}/>
        <Route path='/design/prototype' component={PrototypePattern}/>
        <Route path='/design/singleton' component={SingleTon}/>
        <Route path='/design/strategy' component={Strategy}/>
        <Route component={DesignPatternHome}/>
    </Switch>
}

export default DesignPatternRouter;