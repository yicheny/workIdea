import React from 'react';
import {Route, Switch} from "react-router-dom";
import Calputer from "./control/Calputer";
import MyProjectHome from "./MyProjectHome";
import PublicFunTest from "./control/PublicFunTest";
import DrawRolls from "./control/DrawRolls";
import FriedGoldenFlower from "./control/FriedGoldenFlower";
import Demo from "./control/wolfKill/Demo";
import RedLine from "./control/redLine/RedLine";
import SystemSwitch from "./control/systemSwitch/SystemSwitch";
import SortCase from "./control/sortCase/SortCase";
import OperationDemo from "./control/OperationDemo/OperationDemo";

function MyProjectRouter(props) {
    return (<Switch>
        <Route path='/mProj/calputer' component={Calputer}/>
        <Route path='/mProj/publicFunTest' component={PublicFunTest}/>
        <Route path='/mProj/drawRolls' component={DrawRolls}/>
        <Route path='/mProj/friedGoldenFlower' component={FriedGoldenFlower}/>
        <Route path='/mProj/wolfKill' component={Demo}/>
        <Route path='/mProj/redLine' component={RedLine}/>
        <Route path='/mProj/systemSwitch' component={SystemSwitch}/>
        <Route path='/mProj/sortCase' component={SortCase}/>
        <Route path='/mProj/operation' component={OperationDemo}/>
        <Route component={MyProjectHome}/>
    </Switch>);
}

export default MyProjectRouter;
