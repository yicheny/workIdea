import React,{useState,useRef} from 'react';
import {Container,Button} from "../../../../component";
import LightContext from './Light';

function SwitchLight(props) {
    const lightRef = useRef(new LightContext());
    const [lightState,setLightState] = useState('关灯');

    return <Container header='切换灯光'>
        <div style={{lineHeight:'32px'}}>
            <Button onClick={handleClick}>切换灯光</Button> 灯光状态：{lightState}
        </div>
    </Container>;

    function handleClick(){
        const light = lightRef.current;
        light.currState.switchState(light);
        setLightState(light.stateValue);
    }
}

export default SwitchLight;