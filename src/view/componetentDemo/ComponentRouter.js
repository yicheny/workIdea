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
import CalendarTest from "./control/CalendarTest";
import CalendarWTest from "./control/CalendarWTest";
import MenuMTest from "./control/MenuMTest";
import RadioDemo from "./control/RadioDemo";
import CheckBoxDemo from "./control/CheckBoxDemo";
import CountDownDemo from "./control/CountDownDemo";
import RateDemo from "./control/RateDemo";
import TableWDemo from "./control/TableWDemo";

function ComponentRouter(props) {
    return <Switch>
        <Route path='/component/all' component={All}/>
        <Route path='/component/bread' component={BreadcrumdTest}/>
        <Route path='/component/tabs' component={TabsTest}/>
        <Route path='/component/message' component={MessageTest}/>
        <Route path='/component/modal' component={ModalTest}/>
        <Route path='/component/menu' component={MenuDemo}/>
        <Route path='/component/pkCard' component={PkCardTest}/>
        <Route path='/component/calendar' component={CalendarTest}/>
        <Route path='/component/calendarW' component={CalendarWTest}/>
        <Route path='/component/menuM' component={MenuMTest}/>
        <Route path='/component/radio' component={RadioDemo}/>
        <Route path='/component/checkBox' component={CheckBoxDemo}/>
        <Route path='/component/countDown' component={CountDownDemo}/>
        <Route path='/component/rate' component={RateDemo}/>
        <Route path='/component/tableW' component={TableWDemo}/>
        <Route component={ComponentHome}/>
    </Switch>

}

export default ComponentRouter;