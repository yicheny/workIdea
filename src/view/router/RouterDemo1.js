import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";

function RouterDemo1(props) {
    return <div>
        <Link to='router/demo2'>
            <Button type="primary">点击跳转Router-Demo2</Button>
        </Link>

        <Link to='router/demo2/2'>
            <Button type="text">点击跳转RouterDemo2Next</Button>
        </Link>
    </div>
}

export default RouterDemo1;