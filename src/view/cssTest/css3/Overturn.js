import React from 'react';
import './Overturn.less';
import {Container} from "../../../component";

function Overturn(props) {
    return <Container className='x_overturn' header='卡片翻转'>
        <ul>
            <h3>关键点总结</h3>
            <li>1.为最外层容器设置perspective: 1000;</li>
            <li>2.为正面和背面卡片设置绝对定位，并设置backface-visibility: hidden;</li>
            <li>3.为正面卡片设置一个比背面卡片高的z-index值</li>
            <li>4.为背面卡片设置transform: rotateY(180deg);</li>
            <li>5.触发事件【例如hover】为内层容器设置transform: rotateY(180deg);</li>
            <br/><br/>
            <h3>注意点</h3>
            <li>1.overflow:hidden会导致其子元素丧失3D变换功能</li>
            <br/><br/>
        </ul>

        <div className="x_overturn_box">
            <div className="x_overturn_main fill">
                <div className="x_front fill">
                    前
                </div>
                <div className="x_back fill">
                    后
                </div>
            </div>
        </div>
    </Container>
}

export default Overturn;