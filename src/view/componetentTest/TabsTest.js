import React, {useState} from 'react';
import {Container, Tabs} from "../../component";

function TabsTest(props) {
    const [active,setActive] = useState('1');
    const tabData = [{
        id:'1',
        text:"Tab1"
    }, {
        id:'2',
        text:"Tab2"
    }, {
        id:'3',
        text:"Tab3"
    }];

    return (
        <div>
            <Container>
                <Tabs tabData={tabData} active={active} onClick={(v)=>setActive(v)}/>
            </Container>
        </div>
    );
}

export default TabsTest;