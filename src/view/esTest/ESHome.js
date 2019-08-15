import React from 'react';
import {Switch,Route} from 'react-router-dom';
import EsRouter from "./ESRouter";

function ESHome() {
    return <div>
        <Switch>
            <Route component={EsRouter}/>
        </Switch>
    </div>
}

export default ESHome;