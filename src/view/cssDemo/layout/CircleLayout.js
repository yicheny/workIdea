import React, {createRef, useState,useEffect} from 'react';
import {Container, TextInput} from "../../../component";
import './CircleLayout.less';
import {CirclePosition} from "../../../utils/layoutPublicFun";
// import {typeFor} from '../../../utils/publicFun';

function CircleLayout(props) {
    const [num,setNum] = useState(8);
    const boxRef = createRef();

    useEffect(() => {
        setPosition();
    }, [num]);

    return <Container header='环形排列布局'>
        <TextInput type='number' max={1000} placeholder='请输入子元素数量用于渲染[0,1000] 注意，本示例是一个椭圆' onChange={setNum} autoP/>
        {renderBox(num)}
    </Container>;

    function setPosition() {
        const positionFor = new CirclePosition({boxW:600,boxH:480});
        const items = [...boxRef.current.children];
        items.forEach((el, i) => {
            const {bottom, left} = positionFor(items.length, i);
            el.style.left = left + 'px';
            el.style.bottom = bottom + 'px';
        });
    }

    function renderBox(count) {
        return <div className="circle_layout_box flex-y center" ref={boxRef}>
            {Array.from(Array(count*1),(el,i)=>{
                return <div className="circle_layout_item" key={i}>{i+1}</div>
            })}
        </div>
    }
}

export default CircleLayout;