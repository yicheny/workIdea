import React, {useEffect, useState} from 'react';
import {Button, Container} from "../../../component";
import {userData} from "./data/CustomHookData";

//使用组件形式
function CustomHook(props) {
    const [userName,setUserName] = useState('小明');
    const [online,setOnline] = useState('登录中...');

    return <Container header='自定义hook'>
        <div>当前选择： {userName} {online}</div>

        {
            userData.map((el)=><Online key={el.id} user={el} onClick={handleClick}/>)
        }
    </Container>;

    function handleClick(online,userName) {
        setUserName(userName);
        setOnline(online)
    }
}

function Online(props) {
    const [online,setOnline] = useState(null);

    useEffect(()=>{
        const timeId = setTimeout(()=>{
            changeIsOnline()
        },props.user.time);
        return ()=>clearTimeout(timeId);
    },[]);

    return <div className='flex center-y' style={{margin:4}}>
        <Button onClick={changeIsOnline} type='primary' style={{marginRight:8}}>切换状态</Button>
        <span style={{color:'orange'}}>{props.user.name}</span>登录状态：{onlineMap(online)}
    </div>;

    function changeIsOnline(e) {
        e && e.stopPropagation();
        setOnline(!online);
        props.onClick(onlineMap(!online),props.user.name)
    }

    function onlineMap(status) {
        if(status===null) return '登录中...';
        return status ? <span className='up'>在线</span> : <span className='down'>挂线</span>
    }
}

export default CustomHook;