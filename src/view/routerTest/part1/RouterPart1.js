import React from 'react';
import {Switch,Route} from 'react-router-dom'
import {RenderRoute} from "./Wrapper_Router";
import RouterDemo1 from "./RouterDemo1";
import RouterDemo2 from "./RouterDemo2";
import RouterDemo2Next from "./RouterDemo2Next";

function RouterPart1(props) {
    return <Switch>
        <RenderRoute path='/router/demo2' component={RouterDemo2} exact/>
        <RenderRoute path='/router/demo2/:id' component={RouterDemo2Next} name='name'/>
        {/*<Route path='/router/demo2' component={RouterDemo2}/>*/}
        {/*<Route path='/router/demo2/:id' component={RouterDemo2Next} name='name'/>*/}
        <Route component={RouterDemo1}/>
    </Switch>
}

export default RouterPart1;