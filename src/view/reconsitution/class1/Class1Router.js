import React, {Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import Part1 from "./part1";
import Class1Home from "./Class1Home";

function Class1Router(props) {
    return <Fragment>
        <Switch>
            <Route path='/recons/class1/part1' component={Part1}/>
            <Route component={Class1Home}/>
        </Switch>
    </Fragment>
}

export default Class1Router;