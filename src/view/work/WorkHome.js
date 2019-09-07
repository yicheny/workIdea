import React from 'react';
import {Link} from "react-router-dom";

function WorkHome(props) {
    return <div className='x_pad'>
        <Link to='/wDemo/monthShow'>月度表现</Link>
        <Link to='/wDemo/manyFilter'>多层筛选</Link>
        <Link to='/wDemo/dualStateSave'>双重状态保存</Link>
    </div>
}

export default WorkHome;