import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app';
import Login from './login';
import './asset/style/index.less'
import 'antd/dist/antd.css';

/*const Initialize = ()=>{
    let href = window.location.href.split('/');
    href.pop();
    href.push('login');
    let path = href.join('/');
    window.location.href = path;
};

Initialize();*/

ReactDOM.render(
    (<Router>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route component={App}/>
        </Switch>
    </Router>),
    document.getElementById('root')
);


