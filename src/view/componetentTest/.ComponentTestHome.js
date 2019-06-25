import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from "./Home";
import BreadcrumdTest from "./BreadcrumdTest";
import TabsTest from "./TabsTest";

function ComponentTestHome(props) {
    return <Switch>
        <Route path='/cDemo/bread' component={BreadcrumdTest}/>
        <Route path='/cDemo/tabs' component={TabsTest}/>
        <Route component={Home}/>
    </Switch>

}

export default ComponentTestHome;