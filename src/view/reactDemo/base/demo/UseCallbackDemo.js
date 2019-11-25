import React, {memo, useCallback, useState} from 'react';
import {Button, Container} from "../../../../component";

const CountBtn = memo(function ({onClick,count}) {
    console.log(count);
    return <Button onClick={onClick}>{count}</Button>
});

function UseCallbackDemo(props) {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    const countAdd = useCallback(()=>setCount(count=>count+1),[]);
    const countAdd2 = useCallback(()=>setCount2(count2=>count2+1),[]);

    return <Container ntader='UseCallbackDemo'>
        <CountBtn count={count} onClick={countAdd}/>
        <CountBtn count={count2} onClick={countAdd2}/>
    </Container>
}

export default UseCallbackDemo;