import React, {useEffect} from 'react';
import {Button} from "antd/lib/index";

function BreadcrumdTest2(props) {
    const handleClick = () => {
        return props.history.push({pathname: '/cDemo/bread/demo2/B'})
    };

    useEffect(() => {
        props.setName('/work/bread/demo3', 'Demo3页面修改成功')
    }, []);

    return <div>
        <Button onClick={handleClick} type={"primary"}>点击跳转到Demo3Next</Button>
    </div>
}

export default BreadcrumdTest2;