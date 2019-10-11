import React from 'react';
import {Switch,Route} from 'react-router-dom'
import MonthShow from './MonthShow/MonthShow';
import ManyFilter from './ManyFilter/ManyFilter';
import DualStateSave from "./DualStateSave/DualStateSave";
import WorkHome from "./WorkHome";
import GetRangeDateDemo from "./GetRangeDateDemo/GetRangeDateDemo";

function WorkRouter(props) {
    return <Switch>
        <Route path='/work/monthShow' component={MonthShow}/>
        <Route path='/work/manyFilter' component={ManyFilter}/>
        <Route path='/work/dualStateSave' component={DualStateSave}/>
        <Route path='/work/getRangeDateDemo' component={GetRangeDateDemo}/>
        <Route component={WorkHome}/>
    </Switch>
}

export default WorkRouter;