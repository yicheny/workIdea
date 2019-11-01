import React, {useState} from 'react';
import {Container, Tabs} from "../../../component";

const mockData = {
    Tab1:{
        name:'小明',
        height:'181',
        sexy:'男'
    },
    Tab2:{
        name:"小红",
        height:'158',
        sexy:'女'
    },
    Tab3:{
        name:'小刚',
        height:'177',
        sexy:'男'
    }
};

function TabsTest(props) {
    const [active,setActive] = useState('Tab1');
    const tabData = [
        {
            id:'Tab1',
            text:'Tab1'
        },
        {
            id:'Tab2',
            text:'Tab2'
        },
        {
            id:'Tab3',
            text:'Tab3'
        }
    ];

    const data = mockData[active];
    return (
        <div>
            <Container>
                <Tabs data={tabData} active={active} onClick={(v)=>setActive(v)}/>
                <div>
                    姓名：{data.name}<br/>
                    身高：{data.height}<br/>
                    性别：{data.sexy}
                </div>
            </Container>
        </div>
    );
}

export default TabsTest;