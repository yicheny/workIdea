import React,{useState,useEffect} from 'react';
import './login.less';
import {Button,Card,Icon,Input} from "./component";
import Logo from './asset/svg/ylfLogo';
import Bg from "./component/BG/BG";
import {mergeCn} from "./utils/publicFun";

function Login({history}){
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [placeholder,setPlaceholder] = useState('');
    const [loginMode,setLoginMode] = useState('');

    useEffect(()=>{
        autoPrint();
    },[]);

    useEffect(()=>{
        if(loginMode==='update') return setLoginMode('x_login_warn');
    },[loginMode]);

    return <div className={mergeCn("x_login",loginMode)}>
        <Bg/>
        <Card className='bg_glass' style={{width:960,minWidth:960,minHeight:420,textAlign:"center"}}>
            <div className="x_login_logo">
                <Logo/>
            </div>
            <div className="x_login_input">
                <Input addonBefore={<Icon type='user'/>} onChange={(e)=>setUser(e.target.value)} placeholder={placeholder}/>
                <Input type='password' addonBefore={<Icon type='lock'/>} onChange={(e)=>setPassword(e.target.value)} placeholder='请输入密码'/>
                <Button type="primary" style={{width:200}} onClick={loginClick}>登录</Button>
            </div>
        </Card>
    </div>;

    function loginClick (){
        if (user==='123123'&&password==='321321')return history.push({pathname:'/work'});
        return setLoginMode('update');
    }

    function autoPrint() {
        const tips = ['无法登录？','请检查账号和密码是否输入正确'];
        const cyclicFoo = genCyclic();
        setInterval(()=>{
            cyclicFoo()
        },300);

        function genCyclic() {
            let i = 0;
            let i2 = 0;
            return function () {
                i = i%tips.length;
                setPlaceholder(tips[i].slice(0, i2));
                i2++;
                if(i2>tips[i].length){
                    i2=0;
                    i++;
                }
            }
        }
    }
}
export default Login;