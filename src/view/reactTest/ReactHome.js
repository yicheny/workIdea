import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ParentComponent from "./ParentComponent";
import Context_App from "./Context_App";
import HOC from "./HOC";

function ReactHome() {
    return <div>
        <Switch>
            <Route path='/rDemo/context' component={Context_App}/>
            <Route path='/rDemo/hoc' component={HOC}/>
            <Route component={ParentComponent}/>
        </Switch>
    </div>
}

export default ReactHome;