import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function MyProjectHome(props) {
    return <Fragment>
        <BoxM tit='MyProject'>
            <Link to='/mProj/calputer'>计算器</Link>
            <Link to='/mProj/publicFunTest'>公共方法测试</Link>
            <Link to='/mProj/drawRolls'>抽奖大转盘</Link>
            {/*<Link to='/mProj/friedGoldenFlower'>炸金花</Link>*/}
            <Link to='/mProj/redLine'>赤线Demo</Link>
            <Link to='/mProj/systemSwitch'>进制转换</Link>
            <Link to='/mProj/sortCase'>排序演示</Link>
            <Link to='/mProj/operation'>计算类测试</Link>
            <Link to='/mProj/salesPromotion' >商场促销</Link>
            <Link to='/mProj/salesPromotionV2' >商场促销V2</Link>
            <Link to='/mProj/maze' >迷宫创建</Link>
        </BoxM>
        <BoxM tit='自用'>
            <Link to='/mProj/my/totalStudyTime' >时间统计</Link>
            <Link to='/mProj/my/totalTimeUtils' >计时工具</Link>
            <Link to='/mProj/my/sixDimShow' >六维展示</Link>
            <Link to='/mProj/my/timeChart' >时间变化统计图</Link>
        </BoxM>
    </Fragment>
}

export default MyProjectHome;

