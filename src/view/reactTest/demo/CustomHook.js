import React, {useState} from 'react';
import {Button, Container} from "../../../component";
import {userData} from "./data/CustomHookData";

//暂未使用自定义hook
function CustomHook(props) {
    const [userName,setUserName] = useState('小明');
    const [isOnline,setIsOnline] = useState('登录中...');

    return <Container header='自定义hook'>
        <div>当前选择： {userName} {isOnline}</div>

        {
            userData.map((el)=><Online key={el.id} name={el.name} onClick={handleClick}/>)
        }
    </Container>;

    function handleClick(isOnline,userName) {
        setUserName(userName);
        setIsOnline(isOnline)
    }
}

function Online(props) {
    const [isOnline,setIsOnline] = useState(null);

    return <div className='flex center-y' style={{margin:4}}>
        <Button onClick={changeIsOnline} type='primary' style={{marginRight:8}}>切换状态</Button>
        <span style={{color:'orange'}}>{props.name}</span>登录状态：{isOnlineMap(isOnline)}
    </div>;

    function changeIsOnline(e) {
        e.stopPropagation();
        setIsOnline(!isOnline);
        props.onClick(isOnlineMap(!isOnline),props.name)
    }

    function isOnlineMap(status) {
        if(status===null) return '登录中...';
        return status ? <span className='up'>在线</span> : <span className='down'>挂线</span>
    }
}

export default CustomHook;