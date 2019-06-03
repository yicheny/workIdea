import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Demo from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from "./Demo4";

function WorkHome() {
    return <Switch>
        <Route path='/wDemo/demo' component={Demo}/>
        <Route path='/wDemo/demo2' component={Demo2}/>
        <Route path='/wDemo/demo3' component={Demo3}/>
        <Route component={Demo4}/>
    </Switch>
}

export default WorkHome;