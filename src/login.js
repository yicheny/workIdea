import React from 'react';
import { Link } from 'react-router-dom';
import './login.less';
// import {Button,Card} from "antd";
import {Button,Card} from "./component";
import Logo from './asset/svg/ylfLogo';
import Bg from "./component/BG/BG";

function Login(){
    return <div className="x_login">
        <Bg/>
        {/*<Card style={{width:960,minWidth:960,minHeight:420,textAlign:"center"}}>
            <div className="x_login_logo">
                <Logo/>
            </div>
            <div className="x_login_input">
                <Link to='/cDemo'>
                    <Button type="primary" style={{width:200}}>登录</Button>
                </Link>
            </div>
        </Card>*/}
    </div>
}
export default Login;