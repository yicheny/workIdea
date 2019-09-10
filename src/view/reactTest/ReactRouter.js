import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LifeCycle from "./part1/LifeCycle";
import Context_App from "./part1/Context_App";
import HOC from "./part1/HOC";
import ReactHome from "./ReactHome";
import ChildrenTest from "./children/ChildrenTest";
import HookBase from "./hook/HookBase";

function ReactRouter() {
    return <div>
        <Switch>
            <Route path='/rDemo/lifeCycle' component={LifeCycle}/>
            <Route path='/rDemo/context' component={Context_App}/>
            <Route path='/rDemo/hoc' component={HOC}/>
            <Route path='/rDemo/children' component={ChildrenTest}/>
            <Route path='/rDemo/hookBase' component={HookBase}/>
            <Route component={ReactHome}/>
        </Switch>
    </div>
}

export default ReactRouter;