import React, {useState} from 'react';
import {Container, Tabs, Input} from "../../component";

function DualStateSave(props) {
    const [active,setActive] = useState('Tab1');
   /* const showMap = {
        Tab1:{
            
        },
        Tab2:{
            
        },
        Tab3:{
            
        },
    };*/
    const tabData = [{
        id:'Tab1',
        text:"Tab1"
    }, {
        id:'Tab2',
        text:"Tab2"
    }, {
        id:'Tab3',
        text:"Tab3"
    }];

    return (
        <div>
            <Container>
                <Tabs tabData={tabData} active={active} onClick={(v)=>setActive(v)}/>

                <ul className="main">
                    <li>姓名：<Input/></li>
                    <li>年龄：<Input/></li>
                    <li>性别：<Input/></li>
                    <li>身高：<Input/></li>
                </ul>
            </Container>
        </div>
    );
}

export default DualStateSave;

//点击买入/卖出，获取当前flag(b/s)
//获取当前模块的数据currentData(bData/sData)与切换前的模块数据preData
//获取切换前的子模块号(active)与当前子模块号(preActive)
//将当前显示数据(opts)设置为current(preActive)
//将切换前的数据存入preData(active)