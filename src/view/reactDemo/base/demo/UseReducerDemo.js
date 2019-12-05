import React, {useReducer} from 'react';
import {Button, Container, TextInput} from "../../../../component";

function UseReducerDemo(props) {
    const initialState = {x:1,y:2};
    const [state,dispatch] = useReducer(reducer,initialState,init);
    const {x,y,res} = state;

    return <Container header='UseReducerDemo'>
        <div className="mar_wrap_b">
            <div>计算方程：3x+7y+10的结果</div>
            <div>设置X的值：<TextInput value={x} onChange={(value)=>dispatch({type:'x',value})}/></div>
            <div>设置Y的值：<TextInput value={y} onChange={(value)=>dispatch({type:'y',value})}/></div>
            <div>结果：{res}</div>
            <div><Button type='primary' onClick={()=>dispatch({type:'res'})}>点击获取结果</Button></div>
        </div>
    </Container>;

    function reducer(state,action) {
        const {type,value,} = action;
        if(type==='x') state.x = value;
        if(type==='y') state.y = value;
        if(type==='res') state = init(state);
        return state;
    }

    function init(initState) {
        const {x,y} = initState;
        const res  = 3*x + 7*y + 10;
        return {x,y,res}
    }
}

export default UseReducerDemo;