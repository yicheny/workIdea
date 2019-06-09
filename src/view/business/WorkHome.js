import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Demo from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from "./Demo4";
import {Breadcrumb_w} from "../../component";

function WorkHome(props) {
    const breadCrumb = {
        'wDemo':'一级页面',
        'demo3':'二级页面'
    };
    return <div>
        <Route render={()=>(<Breadcrumb_w option={breadCrumb} separator='/' {...props}/>)}/>
        <Switch>
            <Route path='/wDemo/demo' component={Demo}/>
            <Route path='/wDemo/demo2' component={Demo2}/>
            <Route path='/wDemo/demo3' component={Demo3}/>
            <Route component={Demo4}/>
        </Switch>
    </div>
}

export default WorkHome;