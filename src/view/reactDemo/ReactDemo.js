import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LifeCycle from "./part1/LifeCycle";
import Context_App from "./part1/Context_App";
import HOC from "./part1/HOC";
import ReactHome from "./ReactHome";
import ChildrenTest from "./children/ChildrenTest";
import HookBase from "./hook/HookBase";
import ReactDemoRouter from "./demo/ReactDemoRouter";
import MVCPath from './doc/MVC演变.md';
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