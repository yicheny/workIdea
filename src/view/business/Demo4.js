import React from 'react';
import {Button} from 'antd'

function Demo4(props) {
    const handleClick = ()=>{
        props.history.push({ pathname : '/wDemo/demo3' ,query : { param:[1,2,3,4,5,6]} })
    };
    return <div>
        <Button onClick={handleClick} type={"primary"}>点击跳转到Demo3</Button>
    </div>
}

export default Demo4;