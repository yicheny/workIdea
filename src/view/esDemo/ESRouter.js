import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Md from "../common/MdContaier";

import ESHome from "./ESHome";
import IndexedDbDemo from "./IndexedDB/IndexedDBDemo";
import DeepClonePath from './doc/深拷贝.md';
import RegPath from './doc/正则表达式应用.md';

function ESRouter() {
    return <div>
        <Switch>
            <Route path='/es/indexedDB' component={IndexedDbDemo}/>
            <Route path='/es/deepClone' component={Md(DeepClonePath)}/>
            <Route path='/es/reg' component={Md(RegPath)}/>}/>
            <Route component={ESHome}/>
        </Switch>
    </div>
}

export default ESRouter;