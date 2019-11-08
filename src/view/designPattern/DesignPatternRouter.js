import React from 'react';
import {Route, Switch} from "react-router-dom";
import DesignPatternHome from "./DesignPatternHome";
import Base1 from "./practice/Base1";
import PrototypePattern from "./practice/PrototypePattern";
import SingleTon from "./practice/SingleTon";
import Strategy from "./practice/Strategy";
import Proxy from "./practice/Proxy";
import Iterator from "./practice/Iterator";
import PubSub from "./practice/PubSub";
import Order from "./practice/Order";
import Combination from "./practice/Combination";
import SwitchLight from "./practice/state/SwitchLight";
import Purpose from "./base/Purpose/BasePurpose";
import BasePubSub from "./base/pubsub/BasePubSub";
import BaseDemo from "./base/Demo/BaseDemo";
import BaseState from "./base/state/BaseState";
import OMT from "./base/OMT/OMT";

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
        <Route path='/design/practice/state' component={SwitchLight}/>、

        <Route path='/design/base/demo' component={BaseDemo}/>
        <Route path='/design/base/purpose' component={Purpose}/>
        <Route path='/design/base/pubSub' component={BasePubSub}/>
        <Route path='/design/base/state' component={BaseState}/>
        <Route path='/design/base/omt' component={OMT}/>
        <Route component={DesignPatternHome}/>
    </Switch>
}

export default DesignPatternRouter;