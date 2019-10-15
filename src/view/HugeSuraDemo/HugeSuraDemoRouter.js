import React from 'react';
import {Switch,Route} from "react-router-dom";
import HugeSuraDemoHome from "./HugeSuraDemoHome";
import GenPerson from "./genPerson/GenPerson";

function HugeSuraDemoRouter(props) {
    return <Switch>
        <Route path='/hugeSura/genPerson' component={GenPerson}/>
        <Route component={HugeSuraDemoHome}/>
    </Switch>
}

export default HugeSuraDemoRouter;