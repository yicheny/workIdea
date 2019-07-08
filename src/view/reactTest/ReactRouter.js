import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ReactHome from "./ReactHome";
import Context_App from "./Context_App";
import HOC from "./HOC";

function ReactRouter() {
    return <div>
        <Switch>
            <Route path='/rDemo/context' component={Context_App}/>
            <Route path='/rDemo/hoc' component={HOC}/>
            <Route component={ReactHome}/>
        </Switch>
    </div>
}

export default ReactRouter;