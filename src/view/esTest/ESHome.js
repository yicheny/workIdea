import React from 'react';
import {Switch,Route} from 'react-router-dom';
import EsRouter from "./ESRouter";
import MLodash_get from "./mLodash/MLodash_get";

function ESHome() {
    return <div>
        <Switch>
            <Route path='/es/mlodash/get' component={MLodash_get}/>
            <Route component={EsRouter}/>
        </Switch>
    </div>
}

export default ESHome;