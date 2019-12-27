import React from 'react';
import {Route, Switch} from "react-router-dom";
import Calputer from "./Calputer/Calputer";
import MyProjectHome from "./MyProjectHome";
import PublicFunTest from "./PublicFooDemo/PublicFunTest";
import DrawRolls from "./DrawRolls/DrawRolls";
import FriedGoldenFlower from "./FriedGoldenFlower/FriedGoldenFlower";
import RedLine from "./redLine/RedLine";
import SystemSwitch from "./systemSwitch/SystemSwitch";
import SortCase from "./sortCase/SortCase";
import OperationDemo from "./OperationDemo/OperationDemo";
import SalesPromotion from "./SalesPromotion/SalesPromotion";
import SalesPromotionV2 from "./SalesPromotion/SalesPromotionV2";
import Maze from "./Maze/Maze";

import TotalStudyTime from "./my/TotalStudyTime";
import TotalTimeUtils from "./my/TotalTimeUtils";
import SixDimShow from "./SixDimShow/SixDimShow";
import TimeChangeChart from "./my/TimeChangeChart";
import EchartsIssues from "./EchartsIssues/EchartsIssues";
import DownCsv from  './my/DownCSV';
import ReactCsvDemo from "./my/ReactCsvDemo";

function MyProject(props) {
    return (<Switch>
        <Route path='/mProj/calputer' component={Calputer}/>
        <Route path='/mProj/publicFunTest' component={PublicFunTest}/>
        <Route path='/mProj/drawRolls' component={DrawRolls}/>
        <Route path='/mProj/friedGoldenFlower' component={FriedGoldenFlower}/>
        <Route path='/mProj/redLine' component={RedLine}/>
        <Route path='/mProj/systemSwitch' component={SystemSwitch}/>
        <Route path='/mProj/sortCase' component={SortCase}/>
        <Route path='/mProj/operation' component={OperationDemo}/>
        <Route path='/mProj/salesPromotion' component={SalesPromotion}/>
        <Route path='/mProj/salesPromotionV2' component={SalesPromotionV2}/>
        <Route path='/mProj/maze' component={Maze}/>

        <Route path='/mProj/my/totalStudyTime' component={TotalStudyTime}/>
        <Route path='/mProj/my/totalTimeUtils' component={TotalTimeUtils}/>
        <Route path='/mProj/my/sixDimShow' component={SixDimShow}/>
        <Route path='/mProj/my/timeChart' component={TimeChangeChart}/>
        <Route path='/mProj/my/echartsIssues' component={EchartsIssues}/>
        <Route path='/mProj/my/downCsv' component={DownCsv}/>
        <Route path='/mProj/my/reactCsv' component={ReactCsvDemo}/>
        <Route component={MyProjectHome}/>
    </Switch>);
}

export default MyProject;
