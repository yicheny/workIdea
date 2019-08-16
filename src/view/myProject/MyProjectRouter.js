import React from 'react';
import {Route, Switch} from "react-router-dom";
import './MyProjectRouter.less';
import Calputer from "./control/Calputer";
import MyProjectHome from "./MyProjectHome";
import PublicFunTest from "./control/PublicFunTest";
import DrawRolls from "./control/DrawRolls";

function MyProjectRouter(props) {
    return (<Switch>
        <Route path='/mProj/calputer' component={Calputer}/>
        <Route path='/mProj/publicFunTest' component={PublicFunTest}/>
        <Route path='/mProj/drawRolls' component={DrawRolls}/>
        <Route component={MyProjectHome}/>
    </Switch>);
}

export default MyProjectRouter;
