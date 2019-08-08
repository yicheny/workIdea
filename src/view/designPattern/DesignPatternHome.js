import React from 'react';
import {Link} from "react-router-dom";

function DesignPatternHome(props) {
    return (<div className='x_design'>
        <Link to='/design/base1'>基础常识01</Link>
        <Link to='/design/prototype'>原型模式</Link>
        <Link to='/design/singleton'>单例模式</Link>
        <Link to='/design/strategy'>策略模式</Link>
        <Link to='/design/proxy'>代理模式</Link>
        <Link to='/design/iterator'>迭代器模式</Link>
        <Link to='/design/pubSub'>发布-订阅模式</Link>
        <Link to='/design/order'>命令模式</Link>
    </div>);
}

export default DesignPatternHome;