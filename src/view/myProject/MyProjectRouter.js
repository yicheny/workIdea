import React from 'react';
import {Route, Switch} from "react-router-dom";
import Calputer from "./Calputer/Calputer";
import MyProjectHome from "./MyProjectHome";
import PublicFunTest from "./PublicFooDemo/PublicFunTest";
import DrawRolls from "./DrawRolls/DrawRolls";
import FriedGoldenFlower from "./FriedGoldenFlower/FriedGoldenFlower";
import Demo from "./wolfKill/Demo";
import RedLine from "./redLine/RedLine";
import SystemSwitch from "./systemSwitch/SystemSwitch";
import SortCase from "./sortCase/SortCase";
import OperationDemo from "./OperationDemo/OperationDemo";

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
