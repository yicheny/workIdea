import React from 'react';
import {Button} from "antd";

function Demo3(props) {
    const handleClick = ()=>{
        return props.history.push({ pathname : '/wDemo/demo3/B' })
    };

    // console.log(props.location.search);

    return <div>
        {/*双重状态保存*/}
            <Button onClick={handleClick} type={"primary"}>点击跳转到Demo3Next</Button>
    </div>
}

export default Demo3;