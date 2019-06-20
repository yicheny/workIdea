import React, {Fragment, useState} from 'react';
import {Breadcrumb} from "../../component";
import {Route, Switch} from "react-router-dom";
import BreadcrumdTest2 from "./control/BreadcrumdTest2";
import BreadcrumdTest2Next from "./control/BreadcrumdTest2Next";
import BreadcrumdTest1 from "./control/BreadcrumdTest1";

function BreadcrumdTest(props) {
    const [Name,setName] = useState({
        value:{
            '/cDemo/bread':'cDemo页面',
            '/cDemo/bread/demo2':'demo2页面',
            '/cDemo/bread/demo2/:id':'demo2Next页面',
        },
        setValue:(n,v)=>{
            Name.value[n] = v;
            setName({...Name});
        }
    });

    return <Fragment>
        <Breadcrumb Name={Name.value} separator='/'/>
        <Switch>
            <Route path='/cDemo/bread/demo2' render={(props)=><BreadcrumdTest2 {...props} setName={Name.setValue}/>} exact/>
            <Route path='/cDemo/bread/demo2/:id'  render={(props)=><BreadcrumdTest2Next {...props} setName={Name.setValue}/>}/>
            <Route component={BreadcrumdTest1}/>
        </Switch>
    </Fragment>;
}

export default BreadcrumdTest;