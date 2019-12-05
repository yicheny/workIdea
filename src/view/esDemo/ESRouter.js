import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Md from "../common/MdContaier";

import ESHome from "./ESHome";
import IndexedDbDemo from "./base/demo/IndexedDBDemo";
import DeepClonePath from './base/doc/深拷贝.md';
import RegPath from './base/doc/正则表达式应用.md';
import PromisePath from './base/doc/Promise.md';
import ExecMechPath from './base/doc/执行机制.md';
import CallbackPath from './base/doc/回调.md';

function ESRouter() {
    return <div>
        <Switch>
            <Route path='/es/indexedDB' component={IndexedDbDemo}/>
            <Route path='/es/deepClone' component={Md(DeepClonePath)}/>
            <Route path='/es/reg' component={Md(RegPath)}/>}/>
            <Route path='/es/execMech' component={Md(ExecMechPath)}/>}/>
            <Route path='/es/callback' component={Md(CallbackPath)}/>}/>
            <Route path='/es/promise' component={Md(PromisePath)}/>}/>

            <Route component={ESHome}/>
        </Switch>
    </div>
}

export default ESRouter;