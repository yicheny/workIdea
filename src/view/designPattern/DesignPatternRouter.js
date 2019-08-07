import React from 'react';
import './DesignPatternRouter.less';
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
import Order2 from "./control/Order2";

function DesignPatternRouter(props) {
    return <Switch>
        <Route path='/design/base1' component={Base1}/>
        <Route path='/design/prototype' component={PrototypePattern}/>
        <Route path='/design/singleton' component={SingleTon}/>
        <Route path='/design/strategy' component={Strategy}/>
        <Route path='/design/proxy' component={Proxy}/>
        <Route path='/design/iterator' component={Iterator}/>
        <Route path='/design/pubSub' component={PubSub}/>
        <Route path='/design/order' component={Order}/>
        <Route path='/design/order2' component={Order2}/>
        <Route component={DesignPatternHome}/>
    </Switch>
}

export default DesignPatternRouter;