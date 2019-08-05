import React from 'react';
import {Link} from "react-router-dom";

function DesignPatternHome(props) {
    return (<div className='design'>
        <div>
            <Link to='/design/base1'>基础常识01</Link><br/>
            <Link to='/design/prototype'>原型模式</Link>
        </div>
    </div>);
}

export default DesignPatternHome;