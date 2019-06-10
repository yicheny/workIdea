import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Demo from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from "./Demo4";
import {Breadcrumb_w} from "../../component";

function WorkHome(props) {
    return <div>
        <Route render={()=>(<Breadcrumb_w separator='/' name={['一级页面','二级页面','三级页面']} {...props}/>)}/>
        <Switch>
            <Route path='/wDemo/demo3/demo' component={Demo}/>
            <Route path='/wDemo/demo2' component={Demo2}/>
            <Route path='/wDemo/demo3' component={Demo3}/>
            <Route component={Demo4}/>
        </Switch>
    </div>
}

export default WorkHome;