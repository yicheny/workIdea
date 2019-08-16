import React from 'react';
import {Link} from "react-router-dom";

function MyProjectHome(props) {
    return (
        <div className='x_mProj'>
            <Link to='/mProj/calputer'>计算器</Link>
            <Link to='/mProj/publicFunTest'>自用公共方法测试</Link>
            <Link to='/mProj/drawRolls'>抽奖大转盘</Link>
        </div>
    );
}

export default MyProjectHome;

