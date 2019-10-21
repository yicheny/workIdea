import React from 'react';
import {Container} from "../../../component";
import './RotateDis.less';

function RotateDis(props) {
    return <Container header='旋转放大显示'>
        <div className="rotate_dis_wrap flex center">
            <div className="rotate_dis flex center">
                旋转放大显示
            </div>
        </div>
    </Container>
}

export default RotateDis;