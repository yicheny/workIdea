import React,{useState,useEffect} from 'react';
import './login.less';
import {Button,Card,Icon,Input} from "./component";
import Logo from './asset/svg/ylfLogo';
import Bg from "./component/BG/BG";

function Login({history}){
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [placeholder,setPlaceholder] = useState('');
    const [loginMode,setLoginMode] = useState('');

    let index = 0;
    let textArr = ['无法登录？','请检查账号和密码是否输入正确'];
    textArr = textArr.reduce((acc,el)=>acc.concat(el,'  '),[]);
    let textFlag = 0;
    const autoInput = (v='')=>{
        if(index===v.length){
            textFlag = textFlag===textArr.length ? 0 : ++ textFlag;
        }
        index = index===v.length?0:++index;
        return v.slice(0,index);
    };
    useEffect(()=>{
        const id = setInterval(()=>{
            setPlaceholder(autoInput(textArr[textFlag]))
        },250);
        return ()=>clearInterval(id)
    },[]);

    useEffect(()=>{
        if(loginMode==='update'){
            setLoginMode('x_login_warn');
        }
    },[loginMode]);

    const loginClick = ()=>{
        if (user==='123123'&&password==='321321'){
            return history.push({pathname:'/work'});
        }
        setLoginMode('update');
    };

    return <div className={["x_login",loginMode].join(' ')}>
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
    </div>
}
export default Login;