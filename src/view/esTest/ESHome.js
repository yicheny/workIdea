import React from 'react';
import {Switch,Route} from 'react-router-dom';
import DateTest from './DateTest';

function ESHome() {
    return <div>
        <Switch>
            <Route component={DateTest}/>
            <Route path='/esDemo/date' component={DateTest}/>
        </Switch>
    </div>
}

export default ESHome;