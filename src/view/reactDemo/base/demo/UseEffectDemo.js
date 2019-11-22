import React, {useEffect, useLayoutEffect, createRef} from 'react';
import './UseStateDemo.less';

function UseEffectDemo(props) {
    const ref = createRef();
    const ref2 = createRef();

    useEffect(()=>{
        ref.current.style.transform = `translateX(300px)`;//useEffect在渲染结束后执行，如果在其中操作dom，会看到闪屏现象
    },[]);

    useLayoutEffect(()=>{
        ref2.current.style.transform = `translateX(300px)`;//useLayoutEffect在浏览器绘制dom前执行，在其中操作dom不会造成闪屏
    });

    return <div className="useEffect_demo">
        <div className="boxx_wrap" style={{background:'green'}}>
            <div className="boxx" ref={ref}></div>
            <div className="boxx boxx2" ref={ref2}></div>
        </div>
    </div>
}

export default UseEffectDemo;