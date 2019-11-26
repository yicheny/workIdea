import React, {useState} from 'react';
import './login.less';
import {Button, Card, Icon, TextInput} from "./component";
import Logo from './asset/svg/ylfLogo';
import Bg from "./component/BG/BG";
import {cls} from "./utils/publicFun";

const mockUsers = [
    {
        name: 'ylf',
        pw: 'ylf123123'
    }
];

function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginMode, setLoginMode] = useState('');
    const [tips, setTips] = useState(null);

    return <div className={cls("x_login", loginMode)}>
        <Bg/>
        <Card className='bg_glass' style={{width: 960, minWidth: 960, minHeight: 420, textAlign: "center"}}>
            <div className="x_login_logo">
                <Logo/>
            </div>
            <div className="x_login_input">
                <TextInput addonBefore={<Icon type='user'/>} onChange={setName} placeholder={'无法登录？ 请检查账号和密码是否输入正确'} autoP/>
                <TextInput type='password' addonBefore={<Icon type='lock'/>} onChange={setPassword}
                           placeholder='请输入密码'/>
                <Button type="primary" style={{width: 200}} onClick={loginClick}>登录</Button>
                {tips && <div className="x_login_tips">{tips}</div>}
            </div>
        </Card>
    </div>;

    function loginClick() {
        const user = mockUsers.find(item => item.name === name);
        if (!user||password !== user.pw) {
            setTips('用户名不存在或密码错误，请重新输入');
            return setLoginMode('x_login_warn')
        }
        setTips(null);
        return props.history.push('/work')
    }
}

export default Login;