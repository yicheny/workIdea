import React from 'react';
import './ReconsotutionRouter.less';
import {Switch, Route} from "react-router-dom";
import ReconsitutionHome from "./ReconsitutionHome";
import Part1 from "./class1/part1";
import ExtractFunction from "./class2/ExtractFunction";
import InlineFunction from "./class2/InlineFunction";
import ExtractVariable from "./class2/ExtractVariable";
import InlineVariable from "./class2/InlineVariable";
import ChangeFunctionDeclaration from "./class2/ChangeFunctionDeclaration";

function ReconsitutionRouter(props) {
    return <div className='x_recons pad'>
        <Switch>
            <Route path='/recons/class1/part1' component={Part1}/>

            <Route path='/recons/class2/extractFunction' component={ExtractFunction}/>
            <Route path='/recons/class2/inlineFunction' component={InlineFunction}/>
            <Route path='/recons/class2/extractVariable' component={ExtractVariable}/>
            <Route path='/recons/class2/inlineVariable' component={InlineVariable}/>
            <Route path='/recons/class2/changeFunctionDeclaration' component={ChangeFunctionDeclaration}/>

            <Route component={ReconsitutionHome}/>
        </Switch>
    </div>
}

export default ReconsitutionRouter;