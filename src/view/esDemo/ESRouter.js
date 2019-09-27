import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ESHome from "./ESHome";
import TS1 from "./TS/TS1.js";

function ESRouter() {
    return <div>
        <Switch>
            <Route path='/es/ts1' component={TS1}/>
            <Route component={ESHome}/>
        </Switch>
    </div>
}

export default ESRouter;