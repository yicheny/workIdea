import React from 'react';
import {Button} from "antd";

function Demo3(props) {
    // console.log(props.location.query);
    const handleClick = ()=>{
        props.history.push({ pathname : '/wDemo/demo3/demo' ,query : { param:[1,2,3,4,5,6]} })
    };
    return <div>
        {/*双重切换*/}
        <Button onClick={handleClick} type={"primary"}>点击跳转到Demo1</Button>
    </div>
}

export default Demo3;