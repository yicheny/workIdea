import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import ExtractFunction from "./ExtractFunction";
import Class2Home from "./Class2Home";
import InlineFunction from "./InlineFunction";
import ExtractVariable from "./ExtractVariable";
import InlineVariable from "./InlineVariable";
import ChangeFunctionDeclaration from "./ChangeFunctionDeclaration";

function Class2Router(props) {
    return <Fragment>
        <Switch>
            <Route path='/recons/class2/extractFunction' component={ExtractFunction}/>
            <Route path='/recons/class2/inlineFunction' component={InlineFunction}/>
            <Route path='/recons/class2/extractVariable' component={ExtractVariable}/>
            <Route path='/recons/class2/inlineVariable' component={InlineVariable}/>
            <Route path='/recons/class2/changeFunctionDeclaration' component={ChangeFunctionDeclaration}/>
            <Route component={Class2Home}/>
        </Switch>
    </Fragment>
}

export default Class2Router;