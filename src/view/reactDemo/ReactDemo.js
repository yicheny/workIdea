import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LifeCycle from "./giveUp/LifeCycle";
import Context_App from "./giveUp/Context_App";
import HOC from "./giveUp/HOC";
import ReactHome from "./ReactHome";
import ChildrenTest from "./giveUp/ChildrenTest";
import HookBase from "./giveUp/HookBase";
import ReactDemoRouter from "./giveUp/ReactDemoRouter";
import MVCPath from './giveUp/doc/MVC演变.md';
import Md from "../common/MdContaier";

import HookAPI from './base/doc/Hook API.md';
import UseState from './base/doc/useState.md';
import UseEffect from './base/doc/useEffect.md';
import UseContext from './base/doc/useContext.md';
import UseReducer from './base/doc/useReducer.md';
import UseCallback from './base/doc/useCallback.md';

import UseStateDemo from "./base/demo/UseStateDemo";
import UseStateDemo_C from "./base/demo/UseStateDemo_C";
import UseEffectDemo from "./base/demo/UseEffectDemo";
import UseContextDemo from "./base/demo/UseContextDemo";
import UseReducerDemo from "./base/demo/UseReducerDemo";
import UseCallbackDemo from "./base/demo/UseCallbackDemo";

function ReactDemo() {
    return <div>
        <Switch>
            <Route path='/react/lifeCycle' component={LifeCycle}/>
            <Route path='/react/context' component={Context_App}/>
            <Route path='/react/hoc' component={HOC}/>
            <Route path='/react/children' component={ChildrenTest}/>
            <Route path='/react/hookBase' component={HookBase}/>
            <Route path='/react/demo' component={ReactDemoRouter}/>
            <Route path='/react/mvc' component={Md(MVCPath)}/>

            <Route path='/react/base/hook' component={Md(HookAPI)}/>
            <Route path='/react/base/useState' component={Md(UseState)}/>
            <Route path='/react/base/useEffect' component={Md(UseEffect)}/>
            <Route path='/react/base/useContext' component={Md(UseContext)}/>
            <Route path='/react/base/useReducer' component={Md(UseReducer)}/>
            <Route path='/react/base/useCallback' component={Md(UseCallback)}/>

            {/*注：以下路由为页面测试路由，无对应Link*/}
            <Route path='/react/base/demo/useState' component={UseStateDemo}/>
            <Route path='/react/base/demo/useState_C' component={UseStateDemo_C}/>
            <Route path='/react/base/demo/useEffect' component={UseEffectDemo}/>
            <Route path='/react/base/demo/useContext' component={UseContextDemo}/>
            <Route path='/react/base/demo/useReducer' component={UseReducerDemo}/>
            <Route path='/react/base/demo/useCallback' component={UseCallbackDemo}/>

            <Route component={ReactHome}/>
        </Switch>
    </div>
}

export default ReactDemo;