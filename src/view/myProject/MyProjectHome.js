import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function MyProjectHome(props) {
    return <BoxM tit='MyProject'>
        <Link to='/mProj/calputer'>计算器</Link>
        <Link to='/mProj/publicFunTest'>公共方法测试</Link>
        <Link to='/mProj/drawRolls'>抽奖大转盘</Link>
        {/*<Link to='/mProj/friedGoldenFlower'>炸金花</Link>*/}
        {/*<Link to='/mProj/wolfKill'>狼人杀</Link>*/}
        <Link to='/mProj/redLine'>赤线Demo</Link>
        <Link to='/mProj/systemSwitch'>进制转换</Link>
        <Link to='/mProj/sortCase'>排序演示</Link>
        <Link to='/mProj/operation'>计算类测试</Link>
        <Link to='/mProj/salesPromotion' >商场促销</Link>
    </BoxM>
}

export default MyProjectHome;

