import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout1 from "./layout/Layout1";
import CssTestHome from "./CssTestHome";
import Table1 from "./layout/table1";
import Overturn from "./css3/Overturn";
import Move from "./css3/Move";
import Bounce from "./css3/Bounce";
import MoveToEle from "./css3/MoveToEle";
import CircleLayout from "./layout/CircleLayout";

function CssTestRouter(props) {
    return <Switch>
        <Route path='/css/layout1' component={Layout1}/>
        <Route path='/css/table1' component={Table1}/>
        <Route path='/css/overturn' component={Overturn}/>
        <Route path='/css/move' component={Move}/>
        <Route path='/css/bounce' component={Bounce}/>
        <Route path='/css/moveToEle' component={MoveToEle}/>
        <Route path='/css/circleLayout' component={CircleLayout}/>
        <Route component={CssTestHome}/>
    </Switch>
}

export default CssTestRouter;