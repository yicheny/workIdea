import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ReactHome from "./ReactHome";
import Md from "../common/MdContaier";

import LifeCycle from "./giveUp/demo/LifeCycle";
import Context_App from "./giveUp/demo/Context_App";
import HOC from "./giveUp/demo/HOC";
import ChildrenTest from "./giveUp/demo/ChildrenTest";
import HookBase from "./giveUp/demo/HookBase";
import ReactDemoRouter from "./giveUp/demo/ReactDemoRouter";
import MVCPath from './giveUp/doc/MVC演变.md';

import HookAPI from './base/doc/Hook API.md';
import UseState from './base/doc/useState.md';
import UseEffect from './base/doc/useEffect.md';
import UseContext from './base/doc/useContext.md';
import UseReducer from './base/doc/useReducer.md';
import UseCallback from './base/doc/useCallback.md';
import UseMemo from './base/doc/useMemo.md';
import UseRef from './base/doc/useRef.md';
import UseImperativeHandle from './base/doc/useImperativeHandle.md';
import UseLayoutEffect from './base/doc/useLayoutEffect.md';
import UseDebugValue from './base/doc/useDebugValue.md'

import UseStateDemo from "./base/demo/UseStateDemo";
import UseStateDemo_C from "./base/demo/UseStateDemo_C";
import UseEffectDemo from "./base/demo/UseEffectDemo";
import UseContextDemo from "./base/demo/UseContextDemo";
import UseReducerDemo from "./base/demo/UseReducerDemo";
import UseCallbackDemo from "./base/demo/UseCallbackDemo";
import UseRefDemo from "./base/demo/UseRefDemo";
import UseImpHandleDemo from "./base/demo/UseImpHandleDemo";
import UseDebugValueDemo from "./base/demo/UseDebugValueDemo";
import Tictactoe from "./project/Tictactoe";

import UseCallbackHell from "./Q&A/demo/UseCallbackHell";

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

            <Route path='/react/project/tictactoe' component={Tictactoe}/>

            <Route path='/react/base/hook' component={Md(HookAPI)}/>
            <Route path='/react/base/useState' component={Md(UseState)}/>
            <Route path='/react/base/useEffect' component={Md(UseEffect)}/>
            <Route path='/react/base/useContext' component={Md(UseContext)}/>
            <Route path='/react/base/useReducer' component={Md(UseReducer)}/>
            <Route path='/react/base/useCallback' component={Md(UseCallback)}/>
            <Route path='/react/base/useMemo' component={Md(UseMemo)}/>
            <Route path='/react/base/useRef' component={Md(UseRef)}/>
            <Route path='/react/base/useImperativeHandle' component={Md(UseImperativeHandle)}/>
            <Route path='/react/base/useLayoutEffect' component={Md(UseLayoutEffect)}/>
            <Route path='/react/base/useDebugValue' component={Md(UseDebugValue)}/>

            {/*注：以下路由为页面测试路由，无对应Link*/}
            <Route path='/react/base/demo/useState' component={UseStateDemo}/>
            <Route path='/react/base/demo/useState_C' component={UseStateDemo_C}/>
            <Route path='/react/base/demo/useEffect' component={UseEffectDemo}/>
            <Route path='/react/base/demo/useContext' component={UseContextDemo}/>
            <Route path='/react/base/demo/useReducer' component={UseReducerDemo}/>
            <Route path='/react/base/demo/useCallback' component={UseCallbackDemo}/>
            <Route path='/react/base/demo/useRef' component={UseRefDemo}/>
            <Route path='/react/base/demo/useImperativeHandle' component={UseImpHandleDemo}/>
            <Route path='/react/base/demo/useDebugValue' component={UseDebugValueDemo}/>

            {/*注：以下路由为页面测试路由，无对应Link*/}
            <Route path='/react/qa/demo/useCallbackHell' component={UseCallbackHell}/>

            <Route component={ReactHome}/>
        </Switch>
    </div>
}

export default ReactDemo;