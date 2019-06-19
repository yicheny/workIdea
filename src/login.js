import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "antd";

function Login(){
    return <Link to='/cDemo'>
        <Button type="primary" style={{width:200}}>登录</Button>
    </Link>
}
export default Login;