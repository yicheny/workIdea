import React, {useState, useCallback,Fragment} from 'react';
import {Button} from "../../../../component";

function UseRefDemo(props) {
    const [rect,ref] = useClientRect();

    return (<>
        <Child mRef={ref}/>
        {rect !== null && <h2>The above header is {Math.round(rect.height)}px tall</h2>}
    </>);
}

function Child(props) {
    const {mRef} = props;
    const [show,setShow] = useState(false);

    return <Fragment>
        {show && <h1 ref={mRef}>Hello, world</h1>}
        {!show && <Button type='primary' onClick={()=>setShow(true)}>显示子组件</Button>}
    </Fragment>
}

function useClientRect() {
    const [rect,setRect] = useState(null);

    const ref = useCallback(node => {
        if (node !== null) setRect(node.getBoundingClientRect());
    }, []);

    return [rect,ref];
}
export default UseRefDemo;