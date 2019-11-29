import React from 'react';
import {Switch,Route} from 'react-router-dom'
import MonthShow from './MonthShow/MonthShow';
import MonthShowV2 from './MonthShowV2/MonthShowV2';
import ManyFilter from './ManyFilter/ManyFilter';
import DualStateSave from "./DualStateSave/DualStateSave";
import WorkHome from "./WorkHome";
import GetRangeDateDemo from "./GetRangeDateDemo/GetRangeDateDemo";
import FlowContainer from "./demo/FlowContainer";

function WorkRouter(props) {
    return <Switch>
        <Route path='/work/monthShow' component={MonthShow}/>
        <Route path='/work/monthShowV2' component={MonthShowV2}/>
        <Route path='/work/manyFilter' component={ManyFilter}/>
        <Route path='/work/dualStateSave' component={DualStateSave}/>
        <Route path='/work/getRangeDateDemo' component={GetRangeDateDemo}/>
        <Route path='/work/flowContainer' component={FlowContainer}/>
        <Route component={WorkHome}/>
    </Switch>
}

export default WorkRouter;