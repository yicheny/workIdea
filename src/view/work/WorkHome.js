import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function WorkHome(props) {
    return <BoxM tit='业务测试'>
        <Link to='/work/monthShow'>月度表现</Link>
        <Link to='/work/manyFilter'>多层筛选</Link>
        <Link to='/work/dualStateSave'>双重状态保存</Link>
        <Link to='/work/getRangeDateDemo'>GetRangeDate方法改进</Link>
    </BoxM>
}

export default WorkHome;