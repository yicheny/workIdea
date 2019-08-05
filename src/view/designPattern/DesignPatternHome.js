import React from 'react';
import {Link} from "react-router-dom";

function DesignPatternHome(props) {
    return (<div className='x_design'>
        <Link to='/design/base1'>基础常识01</Link>
        <Link to='/design/prototype'>原型模式</Link>
        <Link to='/design/singleton'>单例模式</Link>
        <Link to='/design/strategy'>策略模式</Link>
    </div>);
}

export default DesignPatternHome;