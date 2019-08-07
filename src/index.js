import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app';
import Login from './login';
import './index.less'
import './custom_common.less'
import 'antd/dist/antd.css';

ReactDOM.render(
    (<Router>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route component={App}/>
        </Switch>
    </Router>),
    document.getElementById('root')
);


