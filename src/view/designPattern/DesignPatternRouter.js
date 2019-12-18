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
import BaseDemo from "./base/BaseDemo";

import Md from "../common/MdContaier";
import OMTPath from './base/doc/OTM表示法.md';
import PubSubPath from './base/doc/观察者模式.md';
import StatePath from './base/doc/状态模式.md';
import CoreTenetPath from './base/doc/设计模式核心原则.md';
import DPClassPath from './base/doc/设计模式分类.md';
import FailDesignPath from './base/doc/反设计及解决方案.md';
import SimpleFactoryPath from './base/doc/简单工厂模式.md';
import FactoryMethodPath from './base/doc/工厂方法模式.md';
import AbstractFactoryPath from './base/doc/抽象工厂模式.md';
import BuilderPath from './base/doc/生成器模式.md';
import PrototypePath from './base/doc/原型模式.md';
import SingletonPath from './base/doc/单例模式.md';
import AdapterPath from './base/doc/适配器模式.md';
import BridgePath from './base/doc/桥接模式.md';

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
        <Route path='/design/base/omt' component={Md(OMTPath)}/>
        <Route path='/design/base/coreTenet' component={Md(CoreTenetPath)}/>
        <Route path='/design/base/dpClass' component={Md(DPClassPath)}/>
        <Route path='/design/base/failDesign' component={Md(FailDesignPath)}/>

        <Route path='/design/base/simpleFactory' component={Md(SimpleFactoryPath)}/>
        <Route path='/design/base/factoryMethod' component={Md(FactoryMethodPath)}/>
        <Route path='/design/base/abstractFactory' component={Md(AbstractFactoryPath)}/>
        <Route path='/design/base/builder' component={Md(BuilderPath)}/>
        <Route path='/design/base/prototype' component={Md(PrototypePath)}/>
        <Route path='/design/base/singleton' component={Md(SingletonPath)}/>
        <Route path='/design/base/adapter' component={Md(AdapterPath)}/>
        <Route path='/design/base/bridge' component={Md(BridgePath)}/>
        <Route path='/design/base/pubSub' component={Md(PubSubPath)}/>
        <Route path='/design/base/state' component={Md(StatePath)}/>
        <Route component={DesignPatternHome}/>
    </Switch>
}

export default DesignPatternRouter;