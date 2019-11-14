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

import MdContainer from "../common/MdContaier";
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
        <Route path='/design/base/omt' component={()=><MdContainer path={OMTPath}/>}/>
        <Route path='/design/base/coreTenet' component={()=><MdContainer path={CoreTenetPath}/>}/>
        <Route path='/design/base/dpClass' component={()=><MdContainer path={DPClassPath}/>}/>
        <Route path='/design/base/failDesign' component={()=><MdContainer path={FailDesignPath}/>}/>

        <Route path='/design/base/simpleFactory' component={()=><MdContainer path={SimpleFactoryPath}/>}/>
        <Route path='/design/base/factoryMethod' component={()=><MdContainer path={FactoryMethodPath}/>}/>
        <Route path='/design/base/abstractFactory' component={()=><MdContainer path={AbstractFactoryPath}/>}/>
        <Route path='/design/base/builder' component={()=><MdContainer path={BuilderPath}/>}/>
        <Route path='/design/base/prototype' component={()=><MdContainer path={PrototypePath}/>}/>
        <Route path='/design/base/singleton' component={()=><MdContainer path={SingletonPath}/>}/>
        <Route path='/design/base/pubSub' component={()=><MdContainer path={PubSubPath}/>}/>
        <Route path='/design/base/state' component={()=><MdContainer path={StatePath}/>}/>
        <Route component={DesignPatternHome}/>
    </Switch>
}

export default DesignPatternRouter;