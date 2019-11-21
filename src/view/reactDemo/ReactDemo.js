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

            <Route component={ReactHome}/>
        </Switch>
    </div>
}

export default ReactDemo;