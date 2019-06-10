import React from 'react';
import {Button} from "antd";
import {Consumer} from "./Context";

function Demo3(props) {
    const handleClick = ()=>{
        props.history.push({ pathname : '/wDemo/demo3/demo' ,query : { param:[1,2,3,4,5,6]} })
    };
    const setBreadName = (callback,value) =>{
        callback(value[1]==='二级页面A'?'二级页面B':'二级页面A',1);
    }
    return <div>
        {/*双重切换*/}
        <Button onClick={handleClick} type={"primary"}>点击跳转到Demo1</Button>
        <Consumer>
            {
                ({value,setValue})=><Button onClick={()=>setBreadName(setValue,value)}>点击修改面包屑名称</Button>
            }
        </Consumer>
    </div>
}

export default Demo3;