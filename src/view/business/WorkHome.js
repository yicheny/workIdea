import React, {useState} from 'react';
import {Switch,Route} from 'react-router-dom'
import Demo from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo3Next from './Demo3Next'
import Demo4 from "./Demo4";
import {Breadcrumb} from "../../component";
import {Provider} from "./Context";

function WorkHome(props) {
    const [Name,setName] = useState({
        '/wDemo':'一级页面',
        '/wDemo/demo3':'二级页面A',
        '/wDemo/demo3/:id':'三级页面'
    });

    return <Provider value={Name}>
        <Breadcrumb Name={Name} separator='/'/>
        <Switch>
            <Route path='/wDemo/demo3' component={Demo3} exact/>
            <Route path='/wDemo/demo3/:id' component={Demo3Next}/>
            <Route path='/wDemo/demo' component={Demo}/>
            <Route path='/wDemo/demo2' component={Demo2}/>
            <Route component={Demo4}/>
        </Switch>
    </Provider>
}

export default WorkHome;