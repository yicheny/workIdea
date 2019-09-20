import React from 'react';
import {Route, Switch} from "react-router-dom";
import ArithmeticDemoHome from "./ArithmeticDemoHome";
import QuestBank from "./questBank/QuestBank";

function ArithmeticDemo(props) {
    return <Switch>
        <Route path='/arithmetic/questBank' component={QuestBank}/>
        <Route component={ArithmeticDemoHome}/>
    </Switch>
}

export default ArithmeticDemo;