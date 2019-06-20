import React from 'react';
import { Link } from 'react-router-dom';
import './login.less';
import {Button,Card} from "antd";
// import {Button,Card} from "./component";

function Login(){
    return <div className="x_login">
        <Card style={{width:540,minHeight:420,textAlign:"center"}}>
            <Link to='/cDemo'>
                <Button type="primary" style={{width:200}}>登录</Button>
            </Link>
        </Card>
    </div>
}
export default Login;