import React from 'react';
import {Switch,Route} from 'react-router-dom'
import All from "./control/All";
import BreadcrumdTest from "./control/BreadcrumdTest";
import TabsTest from "./control/TabsTest";
import ComponentHome from "./ComponentHome";
import MessageTest from "./control/MessageTest";
import ModalTest from "./control/ModalTest";
import MenuDemo from "./control/MenuDemo";
import PkCardTest from "./control/PkCardTest";

function ComponentRouter(props) {
    return <Switch>
        <Route path='/cDemo/all' component={All}/>
        <Route path='/cDemo/bread' component={BreadcrumdTest}/>
        <Route path='/cDemo/tabs' component={TabsTest}/>
        <Route path='/cDemo/message' component={MessageTest}/>
        <Route path='/cDemo/modal' component={ModalTest}/>
        <Route path='/cDemo/menu' component={MenuDemo}/>
        <Route path='/cDemo/pkCard' component={PkCardTest}/>
        <Route component={ComponentHome}/>
    </Switch>

}

export default ComponentRouter;