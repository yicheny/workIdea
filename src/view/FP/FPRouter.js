import React,{Fragment} from 'react';
import {Route, Switch,Link} from "react-router-dom";
import {BoxM} from "../../component";
import Md from "../common/MdContaier";

import Base1Path from './base/doc/函数式编程Base1.md';

function FpRouter(props) {
    return <Switch>
        <Route path='/fp/base1' component={Md(Base1Path)}/>
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