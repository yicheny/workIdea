import React,{useState} from 'react';
import {Container,Button} from "../../../../component";



function SwitchLight(props) {
    const [light,setLight] = useState('关灯');
    return <Container header='切换灯光'>
        <div style={{lineHeight:'32px'}}>
            <Button>切换灯光</Button> 灯光状态：{light}
        </div>
    </Container>
}

export default SwitchLight;