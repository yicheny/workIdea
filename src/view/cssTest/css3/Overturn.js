import React from 'react';
import './Overturn.less';
import {Container} from "../../../component";

function Overturn(props) {
    return <Container className='x_overturn' header='卡片翻转'>
        <div className="x_overturn_box">
            <div className="x_overturn_main">
                <div className="x_front">

                </div>
                <div className="x_back">

                </div>
            </div>
        </div>
    </Container>
}

export default Overturn;