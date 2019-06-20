import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Demo from './Demo';
import Demo2 from './Demo2';
import DualStateSave from "./DualStateSave";

function WorkHome(props) {
    return <Switch>
        <Route path='/wDemo/demo' component={Demo}/>
        <Route path='/wDemo/demo2' component={Demo2}/>
        <Route path='/wDemo/dualStateSave' component={DualStateSave}/>
        <Route component={Demo}/>
    </Switch>
}

export default WorkHome;