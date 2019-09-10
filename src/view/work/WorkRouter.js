import React from 'react';
import {Switch,Route} from 'react-router-dom'
import MonthShow from './MonthShow';
import ManyFilter from './ManyFilter';
import DualStateSave from "./DualStateSave";
import WorkHome from "./WorkHome";

function WorkRouter(props) {
    return <Switch>
        <Route path='/work/monthShow' component={MonthShow}/>
        <Route path='/work/manyFilter' component={ManyFilter}/>
        <Route path='/work/dualStateSave' component={DualStateSave}/>
        <Route component={WorkHome}/>
    </Switch>
}

export default WorkRouter;