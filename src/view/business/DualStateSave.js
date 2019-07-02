import React, {useState} from 'react';
import {Container, Tabs, Input} from "../../component";

function DualStateSave(props) {
    const [active,setActive] = useState('Tab1');
    const showMap = {
        Tab1:{

        },
        Tab2:{

        },
        Tab3:{
            
        },
    };
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