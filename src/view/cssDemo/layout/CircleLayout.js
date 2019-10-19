import React, {createRef, useEffect} from 'react';
import {Container} from "../../../component";
import './CircleLayout.less';

// import {typeFor} from '../../../utils/publicFun';

function CircleLayout(props) {
    const boxW = 600;
    const boxH = 480;
    const itemW = 60;
    const itemH = 60;

    const boxRef = createRef();

    useEffect(() => {
        setPosition();
    }, []);

    return <Container header='环形排列布局'>
        <div className="circle_layout_box flex-y center" ref={boxRef}>
            <div className="circle_layout_item">1</div>
            <div className="circle_layout_item">2</div>
            <div className="circle_layout_item">3</div>
            <div className="circle_layout_item">4</div>
            <div className="circle_layout_item">5</div>
            <div className="circle_layout_item">6</div>
            <div className="circle_layout_item">7</div>
            <div className="circle_layout_item">8</div>
        </div>
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
}

export default CircleLayout;