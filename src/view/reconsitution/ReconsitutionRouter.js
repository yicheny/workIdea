import React from 'react';
import './ReconsotutionRouter.less';
import {Switch, Route} from "react-router-dom";
import ReconsitutionHome from "./ReconsitutionHome";
import Class1Router from "./class1/Class1Router";
import Class2Router from "./class2/Class2Router";

function ReconsitutionRouter(props) {
    return <div className='x_recons x_pad'>
        <Switch>
            <Route path='/recons/class1' component={Class1Router}/>
            <Route path='/recons/class2' component={Class2Router}/>
            <Route component={ReconsitutionHome}/>
        </Switch>
    </div>
}

export default ReconsitutionRouter;