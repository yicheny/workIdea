import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app';
import Login from './login';
import './component/CustomRMenu/CustomRMenu';
import './asset/common.less'
import './index.less'
import 'antd/dist/antd.css';
import 'highlight.js/styles/github.css';
import './asset/theme.less';

ReactDOM.render(
    (<Router>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route component={App}/>
        </Switch>
    </Router>),
    document.getElementById('root')
);


