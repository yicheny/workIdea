import React, {useState} from 'react';
import {Switch,Route} from 'react-router-dom'
import Demo from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from "./Demo4";
import {Breadcrumb_w} from "../../component";
import {Provider} from "./Context";

function WorkHome(props) {
    const [Name,setName] = useState({
        value:['一级页面','二级页面A','三级页面'],
        setValue:(v,i) => {
            Name.value.splice(i, 1, v);
            setName({...Name,value:Name.value})
        }
    });
    return <Provider value={Name}>
        <Route render={()=>(<Breadcrumb_w separator='/' name={Name.value} {...props}/>)}/>
        <Switch>
            <Route path='/wDemo/demo3/demo' component={Demo}/>
            <Route path='/wDemo/demo2' component={Demo2}/>
            <Route path='/wDemo/demo3' component={Demo3}/>
            <Route component={Demo4}/>
        </Switch>
    </Provider>
}

export default WorkHome;