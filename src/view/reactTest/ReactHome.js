import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ParentComponent from "./ParentComponent";
import Context_App from "./Context_App";

function ReactHome() {
    return <div>
        <Switch>
            <Route path='/rDemo/context' component={Context_App}/>
            <Route component={ParentComponent}/>
        </Switch>
    </div>
}

export default ReactHome;