import React from 'react';
import {Link} from "react-router-dom";

function MyProjectHome(props) {
    return (
        <div className='x_mProj x_pad'>
            <Link to='/mProj/calputer'>计算器</Link>
            <Link to='/mProj/publicFunTest'>公共方法测试</Link>
            <Link to='/mProj/drawRolls'>抽奖大转盘</Link>
            <Link to='/mProj/friedGoldenFlower'>炸金花</Link>
        </div>
    );
}

export default MyProjectHome;

