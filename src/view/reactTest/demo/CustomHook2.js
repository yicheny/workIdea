import React, {useEffect, useState} from 'react';
import {Button, Container} from "../../../component";
import {userData} from "./data/CustomHookData";

//使用自定义hook
function CustomHook2(props) {
    const [userName,setUserName] = useState('小明');
    const [online,setOnline] = useState('登录中...');

    return <Container header='自定义hook'>
        <div>当前选择： {userName} {online}</div>

        {
            userData.map((el)=>useOnline(el,handleClick))
        }
    </Container>;

    function handleClick(online,userName) {
        setUserName(userName);
        setOnline(online)
    }
}

function useOnline(user,callback) {
    const [online,setOnline] = useState(null);

    useEffect(()=>{
        autoChangeOnline()
    },[]);

    return <div key={user.id} className='flex center-y' style={{margin:4}}>
        <Button onClick={changeIsOnline} type='primary' style={{marginRight:8}}>切换状态</Button>
        <span style={{color:'orange'}}>{user.name}</span>登录状态：{onlineMap(online)}
    </div>;

    function changeIsOnline(e) {
        e && e.stopPropagation();
        setOnline(!online);
        callback(onlineMap(!online),user.name)
    }

    function autoChangeOnline() {
        setTimeout(()=>{
            changeIsOnline()
        },user.time)
    }

    function onlineMap(status) {
        if(status===null) return '登录中...';
        return status ? <span className='up'>在线</span> : <span className='down'>挂线</span>
    }
}

export default CustomHook2;