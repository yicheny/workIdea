import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function CssTestHome(props) {
    return <BoxM tit='CSS测试'>
        <Link to='/css/layout1'>Layout-上高固定，下高占满</Link>
        <Link to='/css/table1'>Table1-一列固定，其余平分</Link>
        <Link to='/css/overturn'>卡片翻转</Link>
        <Link to='/css/move'>指哪走哪</Link>
        <Link to='/css/bounce'>弹跳旋转</Link>
        <Link to='/css/moveToEle'>移至指定元素位置</Link>
        <Link to='/css/circleLayout'>环形排列布局</Link>
        <Link to='/css/rotateDis'>旋转放大显示</Link>
        <Link to='/css/moreLevelHeight'>多层嵌套高度异常</Link>
    </BoxM>
}

export default CssTestHome;