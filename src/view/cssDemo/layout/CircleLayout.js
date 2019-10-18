import React from 'react';
import {Container} from "../../../component";
import './CircleLayout.less';

function CircleLayout(props) {
    const boxWidth = 600;
    const boxHeight = 480;
    const itemWidth = 60;
    const itemHeight = 60;

    main();
    return <Container header='环形排列布局'>
        <div className="circle_layout_box flex-y center">
            <div className="circle_layout_item">1</div>
            <div className="circle_layout_item">2</div>
            <div className="circle_layout_item">3</div>
            <div className="circle_layout_item">4</div>
            {/*<div className="circle_layout_item">5</div>*/}
            {/*<div className="circle_layout_item">6</div>*/}
        </div>
    </Container>;

    function main() {
        for(let i=0;i<24;i++){
            const rad = (((i+3)%4)/2)*Math.PI;
            const sinValue = Math.sin(rad).toFixed(4);
            const top = (boxWidth-itemWidth)/2;
            const left = (boxHeight-itemHeight)/2;

            console.log(30,(sinValue * left)+left);
            console.log(31,(sinValue+1)*left);

            // console.log((sinValue * top)+top);
        }
    }
}

export default CircleLayout;