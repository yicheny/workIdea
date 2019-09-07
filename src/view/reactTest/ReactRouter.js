import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LifeCycle from "./LifeCycle";
import Context_App from "./Context_App";
import HOC from "./HOC";
import ReactHome from "./ReactHome";

function ReactRouter() {
    return <div>
        <Switch>
            <Route path='/rDemo/lifeCycle' component={LifeCycle}/>
            <Route path='/rDemo/context' component={Context_App}/>
            <Route path='/rDemo/hoc' component={HOC}/>
            <Route component={ReactHome}/>
        </Switch>
    </div>
}

export default ReactRouter;