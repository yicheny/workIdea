import React, {useEffect} from 'react';
import {Button} from "antd";

function Demo3(props) {
    const handleClick = ()=>{
        return props.history.push({ pathname : '/wDemo/demo3/B' })
    };

    useEffect(()=>{
        props.setName('/wDemo/demo3','Demo3页面修改成功')
    },[]);
    // console.log(props.location.search);

    return <div>
        {/*双重状态保存*/}
            <Button onClick={handleClick} type={"primary"}>点击跳转到Demo3Next</Button>
    </div>
}

export default Demo3;