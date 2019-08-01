import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout1 from "./layout/Layout1";
import CssTestHome from "./CssTestHome";
import Table1 from "./layout/table1";

function CssTestRouter(props) {
    return <Switch>
        <Route path='/cssTest/layout1' component={Layout1}/>
        <Route path='/cssTest/table1' component={Table1}/>
        <Route component={CssTestHome}/>
    </Switch>
}

export default CssTestRouter;