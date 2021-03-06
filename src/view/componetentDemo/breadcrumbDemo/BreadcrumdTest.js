import React, {Fragment, useState} from 'react';
import {Breadcrumb} from "../../../component";
import {Route, Switch} from "react-router-dom";
import BreadcrumdTest2 from "./BreadcrumdTest2";
import BreadcrumdTest2Next from "./BreadcrumdTest2Next";
import BreadcrumdTest1 from "./BreadcrumdTest1";
import BreadcrumdTest3 from "./BreadcrumdTest3";

function BreadcrumdTest(props) {
    const [Name,setName] = useState({
        value:{
            '/component/bread':'component页面',
            '/component/bread/demo2':'demo2页面',
            '/component/bread/demo2/:id':'demo2Next页面',
            '/component/bread/demo2/:id/demo3':'demo3页面',
        },
        setValue:(n,v)=>{
            Name.value[n] = v;
            setName({...Name});
        }
    });

    return <Fragment>
        <Breadcrumb Name={Name.value} separator='/'/>
        <Switch>
            <Route path='/component/bread/demo2' render={(props)=><BreadcrumdTest2 {...props} setName={Name.setValue}/>} exact/>
            <Route path='/component/bread/demo2/:id'  render={(props)=><BreadcrumdTest2Next {...props} setName={Name.setValue}/>} exact/>
            <Route path='/component/bread/demo2/:id/demo3' component={BreadcrumdTest3}/>
            <Route component={BreadcrumdTest1}/>
        </Switch>
    </Fragment>;
}

export default BreadcrumdTest;