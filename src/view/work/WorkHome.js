import React from 'react';
import {Link} from "react-router-dom";

function WorkHome(props) {
    return <div className='x_pad'>
        <Link to='/work/monthShow'>月度表现</Link>
        <Link to='/work/manyFilter'>多层筛选</Link>
        <Link to='/work/dualStateSave'>双重状态保存</Link>
    </div>
}

export default WorkHome;