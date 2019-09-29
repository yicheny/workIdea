import React from 'react';
import {Link} from "react-router-dom";

function CssTestHome(props) {
    return (
        <div className='pad'>
            <Link to='/css/layout1'>Layout-上高固定，下高占满</Link>
            <Link to='/css/table1'>Table1-一列固定，其余平分</Link>
            <Link to='/css/overturn'>卡片翻转</Link>
            <Link to='/css/move'>指哪走哪</Link>
            <Link to='/css/bounce'>弹跳旋转</Link>
            <Link to='/css/moveToEle'>移至指定元素位置</Link>
        </div>
    );
}

export default CssTestHome;