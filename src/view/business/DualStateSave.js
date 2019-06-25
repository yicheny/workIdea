import React, {useState} from 'react';
import {Container, Tabs} from "../../component";

function DualStateSave(props) {
    const [active,setActive] = useState('Tab1');
    const showMap = {
        Tab1:'Tab1',
        Tab2:'Tab2',
        Tab3:'Tab3',
    }
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
                {showMap[active]}
            </Container>
        </div>
    );
}

export default DualStateSave;