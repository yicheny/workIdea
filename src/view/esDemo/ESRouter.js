import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ESHome from "./ESHome";
import TS1 from "./TS/TS1.js";
import IndexedDbDemo from "./IndexedDB/IndexedDBDemo";

function ESRouter() {
    return <div>
        <Switch>
            <Route path='/es/ts1' component={TS1}/>
            <Route path='/es/indexedDB' component={IndexedDbDemo}/>
            <Route component={ESHome}/>
        </Switch>
    </div>
}

export default ESRouter;