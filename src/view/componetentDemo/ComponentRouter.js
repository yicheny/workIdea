import React from 'react';
import {Switch,Route} from 'react-router-dom'
import All from "./all/All";
import BreadcrumdTest from "./breadcrumbDemo/BreadcrumdTest";
import TabsTest from "./tabDemo/TabsTest";
import ComponentHome from "./ComponentHome";
import MessageTest from "./messageDemo/MessageTest";
import ModalTest from "./modalDemo/ModalTest";
import MenuDemo from "./menuDemo/MenuDemo";
import PkCardTest from "./pkCardDemo/PkCardTest";
import CalendarTest from "./calendarDemo/CalendarTest";
import CalendarWTest from "./calendarDemo/CalendarWTest";
import MenuMTest from "./menuDemo/MenuMTest";
import RadioDemo from "./radioDemo/RadioDemo";
import CheckBoxDemo from "./checkBoxDemo/CheckBoxDemo";
import CountDownDemo from "./countdownDemo/CountDownDemo";
import RateDemo from "./rateDemo/RateDemo";
import TableWDemo from "./tableDemo/TableWDemo";
import ProgressDemo from "./progressDemo/ProgressDemo";
import TextInputDemo from "./inputDemo/TextInputDemo";
import IconDemo from "./iconDemo/IconDemo";
import DropdownWDemo from './dropdownDemo/DropdownWDemo';
import LoaderDemo from "./LoaderDemo/LoaderDemo";
import Md from "../common/MdContaier";
import MdDocPath from '../designPattern/base/doc/观察者模式.md';

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
        <Route path='/component/progress' component={ProgressDemo}/>
        <Route path='/component/countDown' component={CountDownDemo}/>
        <Route path='/component/rate' component={RateDemo}/>
        <Route path='/component/tableW' component={TableWDemo}/>
        <Route path='/component/textInput' component={TextInputDemo}/>
        <Route path='/component/icon' component={IconDemo}/>
        <Route path='/component/DropdownW' component={DropdownWDemo}/>
        <Route path='/component/showMarkdown' component={Md(MdDocPath)}/>
        <Route path='/component/loader' component={LoaderDemo}/>
        <Route component={ComponentHome}/>
    </Switch>

}

export default ComponentRouter;