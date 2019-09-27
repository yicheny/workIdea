import React,{createRef} from 'react';
import './MoveToEle.less';
import {Button} from "../../../component";

function MoveToEle(props) {
    const boxRef = createRef();
    const guestRef = createRef();

    return <div className='moveToEle flex-y'>
        <div className="moveToEle_top">
            <div className="moveToEle_box flex center" ref={boxRef}> 中间 </div>
        </div>
        <div className="moveToEle_bottom flex center">
            <div className="moveToEle_guest" ref={guestRef}> </div>
            <Button type='primary' onClick={handleClick}>点击移动</Button>
        </div>
    </div>;

    function handleClick() {
        const [x1,y1] = coordinateFor(boxRef.current);
        const [x2,y2] = coordinateFor(guestRef.current);
        guestRef.current.style.transform = `translate(${x1-x2}px,${y1-y2}px)`;

        function coordinateFor(box) {
            const x1 = box.offsetLeft + (box.clientWidth/2);
            const y1 = box.offsetTop + (box.clientHeight/2);

            return [x1,y1];
        }
    }
}

export default MoveToEle;