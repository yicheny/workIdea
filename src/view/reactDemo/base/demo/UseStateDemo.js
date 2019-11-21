import React, {useEffect, useState} from 'react';
import {Button, Container} from "../../../../component";

function Child2() {
    return <div>
        {console.log('Child2--Render执行')}
        Child2
    </div>
}

function Child() {
    const [state,setState] = useState(0);

    useEffect(()=>{
        console.log('Child--useEffect执行');
    },[state]);

    return <div>
        {console.log('Child--Render执行')}
        <Button type='primary' onClick={()=>setState(state=>state+1)}>点击ChildState增加</Button>
        <span style={{'fontSize':24}}>{state}</span>
        <Child2/>
    </div>

}

function UseStateDemo(props) {
    const [state,setState] = useState('A');
    return <Container header='UseStateDemo'>
        <div style={{marginBottom:32}}>
            <Button type='primary' onClick={()=>setState(state=>state==='A'?'B':'A')}>点击切换Demo状态</Button>
            <span style={{'fontSize':21}}>{state}</span>
        </div>
        <Child/>
    </Container>
}

export default UseStateDemo;