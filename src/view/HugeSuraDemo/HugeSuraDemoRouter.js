import React from 'react';
import {Switch,Route} from "react-router-dom";
import HugeSuraDemoHome from "./HugeSuraDemoHome";
import GenPersonDemo from "./genPersonDemo/GenPersonDemo";

function HugeSuraDemoRouter(props) {
    return <Switch>
        <Route path='/hugeSura/genPerson' component={GenPersonDemo}/>
        <Route component={HugeSuraDemoHome}/>
    </Switch>
}

export default HugeSuraDemoRouter;