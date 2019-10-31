import React from 'react';
import {Route, Switch} from "react-router-dom";
import DesignPatternHome from "./DesignPatternHome";
import Base1 from "./control/Base1";
import PrototypePattern from "./control/PrototypePattern";
import SingleTon from "./control/SingleTon";
import Strategy from "./control/Strategy";
import Proxy from "./control/Proxy";
import Iterator from "./control/Iterator";
import PubSub from "./control/PubSub";
import Order from "./control/Order";
import Combination from "./control/Combination";
import SwitchLight from "./control/state/SwitchLight";

function DesignPatternRouter(props) {
    return <Switch>
        <Route path='/design/practice/base1' component={Base1}/>
        <Route path='/design/practice/prototype' component={PrototypePattern}/>
        <Route path='/design/practice/singleton' component={SingleTon}/>
        <Route path='/design/practice/strategy' component={Strategy}/>
        <Route path='/design/practice/proxy' component={Proxy}/>
        <Route path='/design/practice/iterator' component={Iterator}/>
        <Route path='/design/practice/pubSub' component={PubSub}/>
        <Route path='/design/practice/order' component={Order}/>
        <Route path='/design/practice/combination' component={Combination}/>
        <Route path='/design/practice/state' component={SwitchLight}/>
        <Route component={DesignPatternHome}/>
    </Switch>
}

export default DesignPatternRouter;