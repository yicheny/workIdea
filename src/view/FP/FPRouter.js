import React,{Fragment} from 'react';
import {Route, Switch,Link} from "react-router-dom";
import {BoxM} from "../../component";

function FpRouter(props) {
    return <Switch>
        <Route component={FpHome}/>
    </Switch>
}

function FpHome() {
    return <Fragment>
        <BoxM tit='基础'>
            <Link to='/fp/base1'>base1</Link>
        </BoxM>
    </Fragment>
}

export default FpRouter;