import React from 'react';
import {Switch,Route} from 'react-router-dom'
import All from "./control/All";
import BreadcrumdTest from "./control/BreadcrumdTest";
import TabsTest from "./control/TabsTest";
import ComponentHome from "./ComponentHome";
import MessageTest from "./control/MessageTest";

function ComponentRouter(props) {
    return <Switch>
        <Route path='/cDemo/all' component={All}/>
        <Route path='/cDemo/bread' component={BreadcrumdTest}/>
        <Route path='/cDemo/tabs' component={TabsTest}/>
        <Route path='/cDemo/message' component={MessageTest}/>
        <Route component={ComponentHome}/>
    </Switch>

}

export default ComponentRouter;