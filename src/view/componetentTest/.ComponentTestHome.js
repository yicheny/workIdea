import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from "./Home";
import BreadcrumdTest from "./BreadcrumdTest";

function ComponentTestHome(props) {
    return <Switch>
        <Route path='/cDemo/demo0' component={Home}/>
        <Route path='/cDemo/bread' component={BreadcrumdTest}/>
        <Route component={Home}/>
    </Switch>

}

export default ComponentTestHome;