import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function DesignPatternHome(props) {
    return <Fragment>
        <BoxM tit='初步接触_练习'>
            <Link to='/design/practice/base1'>基础常识01</Link>
            <Link to='/design/practice/prototype'>原型模式</Link>
            <Link to='/design/practice/singleton'>单例模式</Link>
            <Link to='/design/practice/strategy'>策略模式</Link>
            <Link to='/design/practice/proxy'>代理模式</Link>
            <Link to='/design/practice/iterator'>迭代器模式</Link>
            <Link to='/design/practice/pubSub'>发布-订阅模式【观察者模式】</Link>
            <Link to='/design/practice/order'>命令模式</Link>
            <Link to='/design/practice/combination'>组合模式</Link>
            <Link to='/design/practice/state'>状态模式</Link>
        </BoxM>

        <BoxM tit='基础知识'>
            <Link to='/design/base/omt'>OMT表示法</Link>
            <Link to='/design/base/coreTenet'>设计模式核心原则</Link>
            <Link to='/design/base/purpose'>设计模式目的总结</Link>
            <Link to='/design/base/pubSub'>观察者模式</Link>
            <Link to='/design/base/state'>状态模式</Link>
        </BoxM>
    </Fragment>
}

export default DesignPatternHome;