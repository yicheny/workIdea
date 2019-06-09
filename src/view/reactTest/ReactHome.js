import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ParentComponent from "./ParentComponent";

function ReactHome() {
    return <div>
        <Switch>
            <Route component={ParentComponent}/>
        </Switch>
    </div>
}

export default ReactHome;