import React, {useState} from 'react';
import {Switch,Route} from 'react-router-dom'
import Demo from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo3Next from './Demo3Next'
import Demo4 from "./Demo4";
import {Breadcrumb_w2} from "../../component";
import {Provider} from "./Context";

function WorkHome(props) {
    const [Name,setName] = useState({
        value:{
            '/wDemo':'一级页面',
            '/wDemo/demo3':'二级页面A',
            '/wDemo/demo3/:id':'三级页面'
        },
        setValue:(v,i) => {

        }
    });

    return <Provider value={Name}>
        <Route render={()=>(<Breadcrumb_w2 separator='/' name={Name.value} {...props}/>)}/>
        <Switch>
            <Route path='/wDemo/demo3/:id' render={()=><Demo3Next {...props} setName={Name.setValue}/>}/>
            <Route path='/wDemo/demo' component={Demo}/>
            <Route path='/wDemo/demo2' component={Demo2}/>
            {/*<Route path='/wDemo/demo3' component={Demo3}/>*/}
            <Route path='/wDemo/demo3' render={()=><Demo3 {...props} setName={Name.setValue}/>}/>
            <Route component={Demo4}/>
        </Switch>
    </Provider>
}

export default WorkHome;