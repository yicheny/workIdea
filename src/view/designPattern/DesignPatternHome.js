import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function DesignPatternHome(props) {
    return <BoxM tit='设计模式'>
        <Link to='/design/base1'>基础常识01</Link>
        <Link to='/design/prototype'>原型模式</Link>
        <Link to='/design/singleton'>单例模式</Link>
        <Link to='/design/strategy'>策略模式</Link>
        <Link to='/design/proxy'>代理模式</Link>
        <Link to='/design/iterator'>迭代器模式</Link>
        <Link to='/design/pubSub'>发布-订阅模式</Link>
        <Link to='/design/order'>命令模式</Link>
        <Link to='/design/combination'>组合模式</Link>
        <Link to='/design/state'>状态模式</Link>
    </BoxM>
}

export default DesignPatternHome;