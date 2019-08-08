import React from 'react';
import {Route, Switch} from "react-router-dom";
import './MyProjectRouter.less';
import Calputer from "./control/Calputer";
import MyProjectHome from "./MyProjectHome";

function MyProjectRouter(props) {
    return (<Switch>
        <Route path='/mProj/calputer' component={Calputer}/>
        <Route component={MyProjectHome}/>
    </Switch>);
}

export default MyProjectRouter;
