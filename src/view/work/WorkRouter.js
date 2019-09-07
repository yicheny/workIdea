import React from 'react';
import {Switch,Route} from 'react-router-dom'
import MonthShow from './MonthShow';
import ManyFilter from './ManyFilter';
import DualStateSave from "./DualStateSave";
import WorkHome from "./WorkHome";

function WorkRouter(props) {
    return <Switch>
        <Route path='/wDemo/monthShow' component={MonthShow}/>
        <Route path='/wDemo/manyFilter' component={ManyFilter}/>
        <Route path='/wDemo/dualStateSave' component={DualStateSave}/>
        <Route component={WorkHome}/>
    </Switch>
}

export default WorkRouter;