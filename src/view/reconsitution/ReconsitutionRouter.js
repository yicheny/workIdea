import React from 'react';
import './ReconsotutionRouter.less';
import {Switch, Route} from "react-router-dom";
import ReconsitutionHome from "./ReconsitutionHome";
import Class1Router from "./class1/Class1Router";

function ReconsitutionRouter(props) {
    return <div className='x_recons'>
        <Switch>
            <Route path='/recons/class1' component={Class1Router}/>
            <Route component={ReconsitutionHome}/>
        </Switch>
    </div>
}

export default ReconsitutionRouter;