import React, {createRef, useState,useEffect} from 'react';
import {Container, TextInput} from "../../../component";
import './CircleLayout.less';

// import {typeFor} from '../../../utils/publicFun';

function CircleLayout(props) {
    const boxW = 600;
    const boxH = 480;
    const itemW = 60;
    const itemH = 60;

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
        const items = [...boxRef.current.children];
        items.forEach((el, i) => {
            const {bottom, left} = positionFor(items.length, i);
            el.style.left = left + 'px';
            el.style.bottom = bottom + 'px';
        });

        function positionFor(max, i) {
            const rad = ((i % max) / (max / 2)) * Math.PI;
            const sinValue = Math.sin(rad).toFixed(4);
            const cosValue = Math.cos(rad).toFixed(4);
            const height = (boxH - itemH) / 2;
            const width = (boxW - itemW) / 2;
            const bottom = (cosValue * height) + height;
            const left = (sinValue * width) + width;
            return {bottom, left};
        }
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