import React from 'react';
import { Button } from 'antd';

function Login(props){

    const handleClick = ()=>{
        props.history.push("/MainPanel");
    };

    return (
        <Button type="primary" to='/MainPanel'>
            登录
        </Button>
    );
}
export default Login;